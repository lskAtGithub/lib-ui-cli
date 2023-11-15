import { series, parallel, src, dest } from 'gulp'
import { buildConfig } from './utils/config'
import path from 'path'
import { projectRoot } from './utils/paths'
import ts from 'gulp-typescript'
import { withTaskName } from './utils'
import { outDir } from './utils/paths'

export const buildPackages = (dirname: string, name: string) => {
  const task = Object.entries(buildConfig).map(([module, config]) => {
    const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
    const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
    const output = path.resolve(dirname, config.output.name)
    return series(
      withTaskName(`build${dirname}`, () => {
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true,
              strict: false,
              module: config.module,
            })()
          )
          .pipe(dest(output))
      }),
      withTaskName(`copy${dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, './lib-ui', config.output.name, name))
        )
      })
    )
  })

  return parallel(...task)
}
