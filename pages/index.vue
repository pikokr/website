<template>
  <SmoothScroll>
    <Hero :scroll-down="scrollToAbout" />
    <div ref="about" class="h-screen" />
  </SmoothScroll>
</template>

<script lang="ts">
import Vue from 'vue'
import Hero from '~/components/main/Hero.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Hero },
  mounted() {},
  methods: {
    scrollToAbout() {
      window.scrollTo({
        top: (this.$refs.about as HTMLDivElement).getBoundingClientRect().top,
      })
    },
  },
})
</script>
