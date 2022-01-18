import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="mt-8 container mx-auto">
      <div className="text-3xl font-bold">About me</div>
      <div className="text-xl">pikokr / 14y / Student web developer</div>
    </div>
  )
}

export default Home
