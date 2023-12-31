import { series, src, dest } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import path from 'path'
import iconfont from 'gulp-iconfont'

function compile() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest(path.resolve(__dirname, './dist')))
}
function copyFont() {
  return src(path.resolve(__dirname, './src/fonts/**'))
    .pipe(iconfont({ fontName: 'iconfont' }))
    .pipe(dest('./dist/fonts'))
}
function copyFullStyle() {
  return src(path.resolve(__dirname, './dist/**')).pipe(
    dest(path.resolve(__dirname, '../../dist/lib-ui/theme-chalk/'))
  )
}

export default series(compile, copyFont, copyFullStyle)
