import { Component } from 'vue'

export type Window = {
  name: string
  title: string
  icon?: string[]
  width: number
  height: number
  content: () => Promise<Component>
}

export const apps = [
  {
    name: 'About',
    title: 'About Me',
    icon: ['fas', 'address-card'],
    width: 500,
    height: 210,
    content: async () => (await import('./windows/About.vue')).default,
  },
  {
    name: 'Projects',
    title: 'Projects',
    icon: ['fas', 'list'],
    width: 300,
    height: 400,
    content: async () => (await import('./windows/Projects.vue')).default,
  },
  // {
  //   name: 'Contact',
  //   title: 'Contact',
  //   icon: ['fas', 'envelope'],
  //   width: 100,
  //   height: 100,
  // },
] as Window[]
