<template>
  <h3>u demo component</h3>
  <p>here is your msg value: {{ props.msg }}</p>
</template>

<script lang="ts" setup>
import { demoProps } from './demo'

const props = defineProps(demoProps)

defineOptions({
  name: 'UDemo',
})
</script>
