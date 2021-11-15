import ky from 'ky-universal'
import { useQuery } from 'react-query'

const fetchPosts = async (limit = 10) => {
  const parsed = await ky('https://jsonplaceholder.typicode.com/posts').json()
  const result = parsed.filter(x => x.id <= limit)
  console.log('*************', result);
  return result
}

const usePosts = limit => {
  return useQuery(['posts', limit], () => fetchPosts(limit))
}

const fetchOnePost = async (id) => {
    const parsed = await ky(`https://jsonplaceholder.typicode.com/posts/${id}`).json()
    console.log('parsed', parsed)
    return parsed
}

const useOnePost = id => {
    console.log('++++++++++ ID',id);
    return useQuery('onePost', () => fetchOnePost(id))
}

export { usePosts, useOnePost, fetchPosts, fetchOnePost }
