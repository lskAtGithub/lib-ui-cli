import type { ExtractPropTypes } from "vue"

export const demoProps = {
  msg: {
    type: String
  }
}

export type DemoProps = ExtractPropTypes<typeof demoProps>
