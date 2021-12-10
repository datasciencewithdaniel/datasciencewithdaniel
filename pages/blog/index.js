
// import Head from 'next/head'
import BlogPresenter from '../../components/blog/BlogPresenter'

// import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import PageHeader from '../../components/pageHead';
import Navigation from '../../components/navigation';
import Title from '../../components/title';
import PageTitle from '../../components/pageTitle';
import Links from '../../components/links';


const Blog = ({ posts }) => {
  	return (<>
      	<PageHeader title=" - Blog" description="The website for the Data Science with Daniel community"></PageHeader>

		<Navigation/>
        <Title/>
		<PageTitle title="Blog"/>

      	<div className="w-10/12 mx-auto my-24">
        	<BlogPresenter postObjs={posts} />
      	</div>
		<Links/>
    </>)
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

