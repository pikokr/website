<template>
  <div class="p-4">
    <div class="text-2xl">Contact</div>
    <div class="flex flex-col">
      <a
        class="flex gap-2 items-center text-lg"
        href="mailto:paring@kimusoft.dev"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span>paring@kimusoft.dev</span>
      </a>
      <a
        class="flex gap-2 items-center text-lg"
        href="https://twitter.com/@pikokr_"
        target="_blank"
        rel="noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <span>@pikokr_</span>
      </a>
      <a
        class="flex gap-2 items-center text-lg"
        href="https://discord.gg/EkFHRG4TZZ"
        target="_blank"
        rel="noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'discord']" />
        <span>파링#3115</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
