import path from 'node:path'
import helper from 'components-helper'
import {
  ceOutput,
  cePackage,
  getPackageManifest,
  projRoot,
} from '@celebrate-ui/node-utils'

import type { TaskFunction } from 'gulp'
import type {
  ReAttribute,
  ReComponentName,
  ReDocUrl,
  ReWebTypesSource,
} from 'components-helper'

const reComponentName: ReComponentName = (title: string) =>
  `ce-${title
    .replace(/\B([A-Z])/g, '-$1')
    .replace(/ +/g, '-')
    .toLowerCase()}`

const reDocUrl: ReDocUrl = (fileName, header) => {
  const docs = 'https://element-plus.org/en-US/component/'
  const _header = header ? header.replaceAll(/\s+/g, '-').toLowerCase() : ''

  return `${docs}${fileName}.html${_header ? '#' : ''}${_header}`
}

const reWebTypesSource: ReWebTypesSource = (title) => {
  const symbol = `Ce${title
    .replaceAll(/-/g, ' ')
    .replaceAll(/^\w|\s+\w/g, (item) => {
      return item.trim().toUpperCase()
    })}`

  return { symbol }
}

const reAttribute: ReAttribute = (value, key) => {
  const str = value
    .replace(/^\*\*(.*)\*\*$/, (_, item) => item)
    .replace(/^`(.*)`$/, (_, item) => item)
    .replaceAll(/<del>.*<\/del>/g, '')

  if (key === 'Name' && /^(-|—)$/.test(str)) {
    return 'default'
  } else if (str === '' || /^(-|—)$/.test(str)) {
    return undefined
  } else if (key === 'Attribute' && /v-model:(.+)/.test(str)) {
    const _str = str.match(/v-model:(.+)/)
    return _str ? _str[1] : undefined
  } else if (key === 'Attribute' && /v-model/.test(str)) {
    return 'model-value'
  } else if (key === 'Attribute') {
    return str
      .replaceAll(/\s*[*\\]\s*/g, '')
      .replaceAll(/\s*<.*>\s*/g, '')
      .replaceAll(/\s*\(.*\)\s*/g, '')
      .replaceAll(/\B([A-Z])/g, '-$1')
      .toLowerCase()
  } else if (key === 'Type') {
    return str
      .replace(/\s*\/\s*/g, '|')
      .replace(/\s*,\s*/g, '|')
      .replace(/\(.*\)/g, '')
      .toLowerCase()
  } else if (key === 'Accepted Values') {
    return /\[.+]\(.+\)/.test(str) || /^\*$/.test(str)
      ? undefined
      : str.replace(/`/g, '')
  } else if (key === 'Subtags') {
    return str
      ? `ce-${str
          .replaceAll(/\s*\/\s*/g, '/ce-')
          .replaceAll(/\B([A-Z])/g, '-$1')
          .replaceAll(/\s+/g, '-')
          .toLowerCase()}`
      : undefined
  } else {
    return str
  }
}

export const buildHelper: TaskFunction = (done) => {
  const { name, version } = getPackageManifest(cePackage)

  const tagVer = process.env.TAG_VERSION
  const _version = tagVer
    ? tagVer.startsWith('v')
      ? tagVer.slice(1)
      : tagVer
    : version!

  helper({
    name: name!,
    version: _version,
    entry: `${path.resolve(
      projRoot,
      'docs/en-US/component'
    )}/!(datetime-picker|message-box|message).md`,
    outDir: ceOutput,
    reComponentName,
    reDocUrl,
    reWebTypesSource,
    reAttribute,
    props: 'Attributes',
    propsName: 'Attribute',
    propsOptions: 'Accepted Values',
    eventsName: 'Event Name',
    tableRegExp:
      /#+\s+(.*\s*Attributes|.*\s*Events|.*\s*Slots|.*\s*Directives)\s*\n+(\|?.+\|.+)\n\|?\s*:?-+:?\s*\|.+((\n\|?.+\|.+)+)/g,
  })

  done()
}
