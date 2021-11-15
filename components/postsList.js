import utilStyles from "../styles/utils.module.css";
import PostDetail from './postDetails'
import { usePosts } from '../hooks'

const PostsList = () => {
    const { data, isLoading } = usePosts(10)

    if(isLoading) return <div>Loading...</div>

  return (
      <div className={utilStyles.grid}>
      {data?.map((post) => (
          <PostDetail post={post} key={post.id}/>
      ))}
      </div>
  );
};

export default PostsList;
