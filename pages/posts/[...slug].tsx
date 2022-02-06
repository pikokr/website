/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

import React from 'react'
import { Post } from '.contentlayer/types'
import { allPosts } from '.contentlayer/data'
import { GetStaticPaths } from 'next'
import TimeIcon from '../../assets/icons/time.svg'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMDXComponent } from 'next-contentlayer/hooks'

type StaticProps = {
  post: Post
}

const PostView: React.FC<StaticProps> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="container mx-auto mt-8">
      <div className="text-4xl">{post.title}</div>
      <div className="flex mt-1 opacity-60 gap-4">
        <div className="flex gap-2 text-xl items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={TimeIcon.src} alt="" draggable="false" />
          {post.readingTime}
        </div>
        <div className="flex gap-2 text-xl items-center">
          <FontAwesomeIcon icon={['fas', 'calendar']} />
          {dayjs(post.date).format('YYYY-MM-DD')}
        </div>
      </div>
      <div>
        <MDXContent />
      </div>
    </div>
  )
}

export default PostView

export const getStaticProps = ({ params: { slug = [] } }): { props: StaticProps } => {
  const pagePath = slug.join('/')

  const post = allPosts.find((post) => post._raw.flattenedPath === pagePath)!

  return { props: { post } }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((_) => `/posts/${_._raw.flattenedPath}`),
    fallback: false,
  }
}
