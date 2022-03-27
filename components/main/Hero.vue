<template>
  <div
    ref="container"
    class="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-screen w-full relative"
  >
    <div
      ref="content"
      class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
    >
      <div ref="title" class="flex text-4xl items-center gap-4 font-bold title">
        <span>Hello</span> <span>there</span>
        <img
          ref="wave"
          draggable="false"
          class="w-12 h-12"
          alt="👋"
          src="https://twemoji.maxcdn.com/v/14.0.1/72x72/1f44b.png"
        />
      </div>
      <div ref="scrollHint">
        <div
          ref="scrollText"
          class="title flex text-2xl items-center font-bold mt-2"
        >
          <span
            v-for="[i, x] in Object.entries('Please Scroll Down')"
            :key="i"
            >{{ x === ' ' ? '&nbsp;' : x }}</span
          >
        </div>
        <client-only>
          <div ref="scrollIcon" class="opacity-0 flex justify-center">
            <div @click="scrollDown">
              <v-icon
                name="fa-angle-down"
                class="w-12 h-12 mt-4 cursor-pointer"
              />
            </div>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap, Back } from 'gsap'
import Vue from 'vue'

export default Vue.extend({
  name: 'MainHero',
  props: {
    scrollDown: {
      required: true,
      type: Function,
    },
  },
  mounted() {
    gsap.fromTo(
      this.$refs.wave as HTMLDivElement,
      {
        rotate: 10,
        duration: 0.5,
        ease: 'none',
      },
      {
        rotate: -10,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: 'none',
      }
    )

    gsap.fromTo(
      (this.$refs.title as HTMLDivElement).children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.3 }
    )
    gsap.delayedCall(2, () => {
      gsap
        .fromTo(
          (this.$refs.scrollText as HTMLDivElement).children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.05, ease: Back.easeOut }
        )
        .then(() => {
          gsap
            .fromTo(
              this.$refs.scrollIcon as HTMLDivElement,
              { opacity: 0, y: 0 },
              { opacity: 1, y: 10 }
            )
            .then(() => {
              gsap.fromTo(
                this.$refs.scrollIcon as HTMLDivElement,
                { y: 10 },
                { y: 0, yoyo: true, repeat: -1 }
              )
            })
        })
    })

    gsap.fromTo(
      this.$refs.content as HTMLDivElement,
      {
        top: '50%',
      },
      {
        top: 0,
        scrollTrigger: {
          scrub: 1,
          trigger: this.$refs.container as HTMLDivElement,
          start: 'top top',
          end: 'bottom center',
        },
      }
    )
  },
})
</script>

<style scoped>
.title > * {
  opacity: 0;
}
</style>
