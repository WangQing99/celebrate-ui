import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const ceRoot = resolve(pkgRoot, 'element-plus')
export const buildRoot = resolve(projRoot, 'node', 'build')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/celebrate-ui` */
export const ceOutput = resolve(buildOutput, 'celebrate-ui')

export const cePackage = resolve(ceRoot, 'package.json')
