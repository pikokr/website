/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import twemoji from 'twemoji'
import Marquee from 'react-fast-marquee'
import { projects } from '../utils/data/projects'

const Home: NextPage = () => {
  return (
    <div className="mt-8 gap-2 flex flex-col">
      <div className="px-3">
        <div className="container mx-auto">
          <div className="text-3xl font-bold">About me</div>
          <div className="text-xl">pikokr / 14y / Student web developer</div>
          <div className="flex gap-2 items-center text-xl">
            <span
              dangerouslySetInnerHTML={{
                __html: twemoji.parse('🏳️‍⚧️', { className: 'w-8 h-8', folder: 'svg', ext: '.svg' }),
              }}
            />
            she/her
          </div>
          <div className="flex select-none gap-2 flex-wrap">
            <a href="https://github.com/pikokr" rel="noreferrer" target="_blank" className="flex text-xl gap-2">
              <FontAwesomeIcon className="text-2xl" icon={['fab', 'github']} />
              GitHub
            </a>
            <a href="https://discord.gg/EkFHRG4TZZ" rel="noreferrer" target="_blank" className="flex text-xl gap-2">
              <FontAwesomeIcon className="text-2xl" icon={['fab', 'discord']} />
              Discord
            </a>
            <a href="https://twitter.com/pikokr_" rel="noreferrer" target="_blank" className="flex text-xl gap-2">
              <FontAwesomeIcon className="text-2xl" icon={['fab', 'twitter']} />
              Twitter
            </a>
            <a href="https://youtube.com/c/pikokr" rel="noreferrer" target="_blank" className="flex text-xl gap-2">
              <FontAwesomeIcon className="text-2xl" icon={['fab', 'youtube']} />
              YouTube
            </a>
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="text-xl whitespace-nowrap">
              Volunteering in{' '}
              <a href="https://github.com/adofai-gg" className="border-b" rel="noreferrer" target="_blank">
                Adofai.GG
              </a>{' '}
              and{' '}
              <a href="https://github.com/kimusoft" className="border-b" rel="noreferrer" target="_blank">
                KimuSoft
              </a>
            </div>
          </div>
          <div className="mt-20 text-3xl font-bold">More About Me</div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-3xl font-bold">Rhythm Games</div>
              <div className="text-xl mt-2">My favorite game genre is rhythm game. I play ADOFAI, osu, etc...</div>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-3xl font-bold">Cute things</div>
              <div className="text-xl mt-2">I love cute things!!!</div>
            </div>
            <div className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-all">
              <div className="text-3xl font-bold">And More...</div>
              <div className="text-xl mt-2">If you want to know more about me, please join discord and ask!</div>
            </div>
          </div>
          <div className="mt-20 text-3xl font-bold">Projects</div>
        </div>
      </div>
      <Marquee gradient={false} speed={64} direction="left">
        {projects.map((x, i) => (
          <a
            href={`https://github.com/${x.repo}`}
            rel="noreferrer"
            target="_blank"
            key={i}
            className="p-4 rounded-md shadow-lg bg-black bg-opacity-20 hover:bg-opacity-30 transition-all hover:-translate-y-2  mr-4 mt-2"
          >
            <div className="text-xl font-bold">{x.name}</div>
            <div>{x.description}</div>
          </a>
        ))}
      </Marquee>
      <Marquee gradient={false} direction="right" speed={64}>
        {projects.map((x, i) => (
          <a
            href={`https://github.com/${x.repo}`}
            rel="noreferrer"
            target="_blank"
            key={i}
            className="p-4 rounded-md shadow-lg bg-black bg-opacity-20 hover:bg-opacity-30 transition-all hover:-translate-y-2 mr-4 mt-2"
          >
            <div className="text-xl font-bold">{x.name}</div>
            <div>{x.description}</div>
          </a>
        ))}
      </Marquee>
    </div>
  )
}

export default Home
