import Head from 'next/head'
import { dehydrate, QueryClient } from 'react-query'
import PostsList from '../components/postsList'
import { fetchPosts } from '../hooks'

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Title</title>
      </Head>
        <PostsList />
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient;

  await queryClient.prefetchQuery(['posts, 10'], () => fetchPosts(10))
  return {
    props: {
      dehydrateState: dehydrate(queryClient)
    }
  }
}
