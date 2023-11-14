import type { ExtractPropTypes } from "vue"


export const iconProps = {
  name: {
    type: String,
    default: () => ''
  },
  size: {
    type: Number,
    default: () => 24
  }
}
export type iconProps = ExtractPropTypes<typeof iconProps>

