import { program } from 'commander'
import { build } from '@celebrate-ui/build'
import { version } from '../package.json'

program.name('Element Plus Build CLI').version(version)

program
  .command('build [packageName]')
  .description('build package')
  .action((name: string) => build(name))

program.parse(process.argv)

export * from '@celebrate-ui/build'
