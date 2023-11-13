import { series, parallel } from 'gulp' 
import { runTask } from './utils' 

export default series(
  runTask('clear', 'rm -rf ./dist'),
  runTask('buildPackages', 'pnpm run --filter ./packages --parallel build')
)