import { series } from 'gulp' 
import { src } from 'gulp'
import path from 'path'
import clean from 'gulp-clean'
import { withTaskName } from './build/utils'
import { projectRoot } from './build/utils/paths'

// todo 未打包组件和生成对应 ts 声明文件
function removeSoundCodePackFile() {
  return src(
    [
      path.resolve(projectRoot, './packages/theme-chalk/dist'),
      path.resolve(projectRoot, './packages/utils/es'),
      path.resolve(projectRoot, './packages/utils/lib'),
    ],
    {
      read: false,
      allowEmpty: true,
    }
  ).pipe(clean())
}

export default series(
  withTaskName('cleanSoundCodePack', removeSoundCodePackFile)
)