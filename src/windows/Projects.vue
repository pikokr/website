<template>
  <div class="p-4">
    <div class="text-2xl">Projects</div>
    <div class="mt-2">
      <div v-for="project in projects" class="border-t pt-2">
        <div class="text-2xl">{{ project.name }}</div>
        <div class="text-md mb-2">{{ project.description }}</div>
        <div class="flex gap-4 text-2xl pb-2">
          <a
            :href="`https://github.com/${project.repo}`"
            target="_blank"
            rel="noreferrer"
            v-if="project.repo"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a
            :href="project.website"
            target="_blank"
            rel="noreferrer"
            v-if="project.website"
          >
            <font-awesome-icon :icon="['fas', 'globe']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Project = {
  name: string
  description: string
  repo?: string
  website?: string
}

const projects: Project[] = [
  {
    name: 'Command.TS',
    description: 'Command Framework for Discord.js Typescript Users',
    repo: 'pikokr/command.ts',
    website: 'https://cts.pikokr.dev',
  },
  {
    name: '초성퀴즈',
    description: 'Twitch Word game for Koreans',
    repo: 'paringparing/twitch-chosung-renewed',
    website: 'https://csquiz.link',
  },
  {
    name: 'Youtube-DL GUI',
    description: 'A gui tool to download youtube videos',
    repo: 'pikokr/youtube-dl-gui',
  },
]
</script>

<style scoped></style>
