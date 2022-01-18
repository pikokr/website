import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import twemoji from 'twemoji'

const Home: NextPage = () => {
  return (
    <div className="mt-8 container mx-auto gap-2 flex flex-col">
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
      <div className="flex select-none gap-2">
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
      <div className="text-xl">
        Working in{' '}
        <a href="https://github.com/kimusoft" className="border-b" rel="noreferrer" target="_blank">
          KimuSoft
        </a>
      </div>
    </div>
  )
}

export default Home
