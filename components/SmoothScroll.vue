<template>
  <div ref="container" class="fixed w-full">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { gsap } from 'gsap'

let height: number = 0

const ro = process.client
  ? new ResizeObserver((entries) => {
      height = entries[0].contentRect.height
      document.body.style.height = height + 'px'
    })
  : (null as unknown as ResizeObserver)

export default Vue.extend({
  name: 'SmoothScroll',
  mounted() {
    ro.observe(this.$refs.container as HTMLDivElement)
    gsap.to(this.$refs.container as HTMLDivElement, {
      y: () => -(height - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
  },
  beforeDestroy() {
    ro.disconnect()
  },
})
</script>
