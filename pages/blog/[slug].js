import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

export default function PostPage({
	frontmatter: { title, date, coverImage },
	slug,
	content,
	}) {
	return (
		<div className='mx-auto sm:w-6/12 w-11/12 '>
		<Link href='/blog'>
			<a className=' font-light'> {"<--"} Go Back</a>
		</Link>
		<br/>
		<div className='mt-8'>
			<h1 className='text-xl'>{title}</h1>
			<div className='prose mb-8 text-gray-400'>Posted on {date}</div>
			<img src={coverImage} alt={title} />
			<div className='prose prose max-w-none mx-auto' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
		</div>
		</div>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('_posts'))

	const paths = files.map((filename) => ({
		params: {
		slug: filename.replace('.md', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('_posts', slug + '.md'),
		'utf-8'
	)

	const { data: frontmatter, content } = matter(markdownWithMeta)

	return {
		props: {
		frontmatter,
		slug,
		content,
		},
	}
}
