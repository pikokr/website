import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'

const postComputedFields: ComputedFields<'Post'> = {
  readingTime: { type: 'string', resolve: (post) => `${Math.ceil(readingTime(post.body.raw).minutes)} min` },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  bodyType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    category: { type: 'string', required: false },
  },
  computedFields: postComputedFields,
}))

export default makeSource({
  contentDirPath: 'blog',
  documentTypes: [Post],
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
})
