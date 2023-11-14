<template>
  <i
    :class="`u-icon-${props.name}`"
    :style="{ fontSize: props.size + 'px' }"
  ></i>
</template>

<script lang="ts" setup>
import { iconProps } from './icon'

defineOptions({
  name: 'UIcon',
})

const props = defineProps(iconProps)
</script>
