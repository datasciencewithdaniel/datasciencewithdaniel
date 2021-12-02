import Container from '../../components/blog/container'
import PostBody from '../../components/blog/post-body'
import PostHeader from '../../components/blog/post-header'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

import NavPlus from '../../components/navplus';

export default function Post({ post, morePosts, preview }) {

  return (
    <>
    <NavPlus/>

      <Container>
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
      </Container>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
