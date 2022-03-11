<template>
  <div class="p-8 flex gap-4">
    <img
      src="https://github.com/pikokr.png"
      alt="pfp"
      class="w-36 h-36 ring rounded-xl"
    />
    <div class="flex-grow flex flex-col gap-1">
      <div class="text-3xl">pikokr</div>
      <div class="flex items-center gap-4">
        <div>Age</div>
        <div class="flex-grow border-b-2 border-black border-dotted" />
        <div>{{ year }}y</div>
      </div>
      <div class="flex items-center gap-4">
        <div>Pronouns</div>
        <div class="flex-grow border-b-2 border-black border-dotted" />
        <div>She/her</div>
      </div>
      <div class="flex-grow" />
      <div class="flex gap-4 text-lg">
        <a
          href="https://twitter.com/@pikokr_"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          href="https://discord.gg/EkFHRG4TZZ"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
        </a>
        <a
          href="https://github.com/pikokr"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = Math.floor(
  (Date.now() - new Date(2007, 3, 27, 0, 0, 0, 0).getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365
)
</script>
