<template>
  <button
    ref="button_ref"
    class="u-button"
    :class="[
      props.type ? `u-button--${props.type}` : '',
      { 'is-active': isActive },
    ]"
    @click="handleClick"
  >
    <span class="u-button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { buttonProps, buttonEmits } from './button'

let isActive: Ref<boolean> = ref(false)

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const handleClick = (e: MouseEvent) => {
  if (!isActive.value) isActive.value = true
  if (isActive.value) setTimeout(() => (isActive.value = false), 300)
  emit('click', e)
}

defineOptions({
  name: 'UButton',
})
</script>
