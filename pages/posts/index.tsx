/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

import React from 'react'
import { allPosts } from '.contentlayer/data'
import { Post } from '.contentlayer/types'
import TimeIcon from '../../assets/icons/time.svg'
import Link from 'next/link'

const PostList: React.FC = () => {
  return (
    <div className="px-3">
      <div className="container mx-auto mt-8">
        <div className="text-3xl font-bold">Posts</div>
        <div className="flex flex-col gap-4 mt-4">
          {[...allPosts].map((x: Post, i) => (
            <Link href="/posts/[...slug]" as={`/posts/${x._raw.flattenedPath}`} key={i} passHref>
              <a className="flex gap-2" onDragStart={(e) => e.preventDefault()}>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://via.placeholder.com/960x512" alt="" className="w-64 h-32 rounded-lg shadow-lg" />
                </div>
                <div className="flex flex-col p-2">
                  <div className="text-3xl font-bold">{x.title}</div>
                  <div className="text-lg flex gap-4">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={TimeIcon.src} alt="" draggable="false" />
                      <span>{x.readingTime}</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
