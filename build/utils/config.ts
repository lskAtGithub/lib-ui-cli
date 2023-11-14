import path from 'path'
import { outDir } from './paths'
import { PKG_NAME } from '../../constants/pkg'

export const buildConfig = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(outDir, 'es'),
    },
    bundle: {
      path: `${PKG_NAME}/es`,
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib'),
    },
    bundle: {
      path: `${PKG_NAME}/lib`,
    },
  }
}

export type BuildConfig = typeof buildConfig
