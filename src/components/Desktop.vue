<template>
  <div class="container">
    <div
      v-for="i in apps"
      class="flex flex-col items-center w-20 h-20 justify-center"
    >
      <font-awesome-icon
        :icon="i.icon ?? ['fas', 'window-maximize']"
        size="3x"
      />
      {{ i.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { apps } from '../apps'
</script>

<style scoped>
.container {
  @apply pl-8 pt-8 flex flex-col flex-wrap flex-grow h-0 w-0 items-start gap-4;
}
</style>
