<template>
  <div class="root">
    <MenuBar />
    <Desktop />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Cafe24Dongdong';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Dongdong.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  overflow: hidden;
  font-family: Cafe24Dongdong, sans-serif;
}
</style>
<style scoped>
.root {
  @apply h-screen w-screen text-white flex flex-col;
  background: #2d81ff;
}
</style>
<script>
import Desktop from './components/Desktop.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  components: { MenuBar, Desktop },
}
</script>
