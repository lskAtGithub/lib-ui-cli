<template>
  <div class="container">
    <u-demo msg="测试组件"></u-demo>
  <u-button type="" @click="handleClick">按钮</u-button>
  <u-button type="primary" @click="handleClick">按钮</u-button>
  <u-button type="info" @click="handleClick">按钮</u-button>
  <u-button type="danger" @click="handleClick">按钮</u-button>
  <u-button type="warning" @click="handleClick">按钮</u-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'App',
})

const handleClick = (e: MouseEvent) => {
  console.log(e)
}
</script>

<style>
.container {
  width: 300px;
  margin: 250px auto;
  text-align: center;
}
</style>
