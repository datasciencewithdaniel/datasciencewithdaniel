
import Head from 'next/head'
import BlogPresenter from '../../components/blog-2/BlogPresenter'

import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import NavPlus from '../../components/navplus';
import PageHeader from '../../components/pageheader';


const Blog = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Data science with Daniel Blog page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavPlus />

      <div className="mx-auto  mt-24 ">
        <h2 className="text-4xl text-center">
          Blog
        </h2>
      </div>

      <div className="w-10/12 mx-auto my-24">
        <BlogPresenter postObjs={posts} />
      </div>

    </div>
  )
}

export default Blog


export async function getStaticProps() {

  //get files from post dir 
  const files = fs.readdirSync(path.join('_posts'))

  //get slug and front matter from posts 
  const posts = files.map(filename => {

    //create slug
    const slug = filename.replace('.md', "")

    const markdownWithMeta = fs.readFileSync(path.join('_posts', filename,), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)


    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      //   posts: posts.sort(sortByDate),
      posts: posts
    }
  }
}

