import Container from '../../components/blog/container'
import MoreStories from '../../components/blog/more-stories'
import { getAllPosts } from '../../lib/api'

import NavPlus from '../../components/navplus';
import PageHeader from '../../components/pageheader';

export default function Index({ allPosts }) {
  return (
    <>

    <NavPlus/>
    <PageHeader pageTitle="Blog"/>

        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}
