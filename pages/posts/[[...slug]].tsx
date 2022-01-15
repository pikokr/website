import React from 'react'
import { Post } from '.contentlayer/types'
import { allPosts } from '.contentlayer/data'
import { GetStaticPaths } from 'next'

type StaticProps = {
  post: Post
}

const PostView: React.FC<StaticProps> = ({ post }) => {
  return <div>{post.title}</div>
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
