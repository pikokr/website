/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

export type Project = {
  name: string
  repo: string
  description: string
}

const p = [
  {
    name: 'Command.TS',
    description: 'A comamnd framework for discord.js typescript',
    repo: 'pikokr/command.ts',
  },
  {
    name: 'Jejudo',
    description: 'A debugging tool for discord.js, inspired by dokdo',
    repo: 'pikokr/dokdo',
  },
  {
    name: '트위치 초성퀴즈',
    description: 'quiz minigame for Twitch with customizable words',
    repo: 'paringparing/twitch-chosung',
  },
]

export const projects: Project[] = [...p, ...p, ...p]
