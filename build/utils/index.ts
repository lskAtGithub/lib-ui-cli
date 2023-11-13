import type { TaskFunction } from 'gulp'

import { run } from './process'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const runTask = (name: string, command: string) =>
  withTaskName(`shellTask:${name}`, () => run(command))
