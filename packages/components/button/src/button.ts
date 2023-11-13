import type { ExtractPropTypes, PropType, SetupContext } from "vue"

type ButtonType = 'primary' | 'warning' | 'info' | 'danger' | 'default'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: () => 'default'
  },
  loading: {
    type: Boolean,
    default: () => false
  }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>


export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type ButtonEmits = typeof buttonEmits
