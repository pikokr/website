<template>
  <div
    :style="{
      'pointer-events': 'all',
      left: `${win.x}px`,
      top: `${win.y}px`,
    }"
    @mousedown="click"
    class="window"
  >
    <div class="titleBar" @mousedown="mouseDown">
      <div class="icons">
        <div class="icon" @click="closeWindow" />
      </div>
      <div class="title">{{ app.title }}</div>
    </div>
    <div class="titleBar__mobile">
      <font-awesome-icon @click="closeWindow" :icon="['fas', 'chevron-left']" />
      <div class="flex-grow text-center">{{ app.title }}</div>
    </div>
    <div
      :style="{
        width: `${app.width}px`,
        height: `${app.height}px`,
        maxWidth: '100vw',
      }"
      class="overflow-y-auto window-content"
    >
      <Suspense>
        <WindowContent :content="app.content" />
        <template #fallback>
          <div class="w-full h-full justify-center items-center flex">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore, WindowData } from '../store'
import { apps } from '../apps'
import { storeToRefs } from 'pinia'
import WindowContent from './WindowContent.vue'
import { onMounted, onUnmounted } from 'vue'

const { win } = defineProps<{ win: WindowData }>()

const store = useMainStore()

const { windows } = storeToRefs(store)

const app = apps[win.id]

let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0

const click = () => {
  const idx = windows.value.findIndex((x) => x.id === win.id)
  const data = windows.value.splice(idx, 1)[0]
  windows.value.push(data)
}

const mouseDown = (e: MouseEvent) => {
  e.preventDefault()
  pos3 = e.clientX
  pos4 = e.clientY
  document.onmouseup = closeDrag
  document.onmousemove = drag
}
const drag = (e: MouseEvent) => {
  e.preventDefault()
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX
  pos2 = pos4 - e.clientY
  pos3 = e.clientX
  pos4 = e.clientY
  win.x = Math.min(
    Math.max(app.width / 2, win.x - pos1),
    document.body.clientWidth - app.width / 2
  )
  win.y = Math.min(
    Math.max(app.height / 2 + 20 + 48, win.y - pos2),
    document.body.clientHeight - (app.height / 2 + 20)
  )
}
const closeDrag = () => {
  document.onmouseup = null
  document.onmousemove = null
}
const closeWindow = () => {
  windows.value.splice(
    windows.value.findIndex((x) => x.id === win.id),
    1
  )
}

const handleResize = () => {
  if (app.width < window.innerWidth) {
    win.x = Math.min(
      Math.max(app.width / 2, win.x - pos1),
      document.body.clientWidth - window.innerWidth / 2
    )
  }
  if (app.height < win.y + app.height) {
    win.y = Math.min(
      Math.max(window.innerHeight / 2 + 20 + 48),
      document.body.clientHeight - (app.height / 2 + 20)
    )
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.window {
  transform: translate(-50%, -50%);
  @apply bg-white shadow-2xl text-black rounded-xl overflow-hidden flex flex-col;
  position: fixed;
  @media (max-width: 768px) {
    left: 0 !important;
    top: 0 !important;
    transform: unset;
    border-radius: 0 !important;
    width: 100%;
    height: 100%;
    .titleBar {
      display: none !important;
    }
    .titleBar__mobile {
      display: flex !important;
    }
    .window-content {
      width: 100vw !important;
    }
  }
  .window-content {
    flex-grow: 1;
  }
  .titleBar__mobile {
    @apply p-4 border-b items-center;
    display: none;
  }
  .titleBar {
    height: 40px;
    display: flex;
    align-items: center;
    @apply px-3 flex gap-4 border-b;
    .title {
      @apply flex-grow text-center;
    }
    .icons {
      @apply flex gap-2;
      .icon {
        width: 20px;
        height: 20px;
        @apply rounded-full bg-red-400 hover:brightness-90 active:brightness-75 transition-all cursor-pointer;
      }
    }
  }
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #555555;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
