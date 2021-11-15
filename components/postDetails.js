import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const PostDetail = ({post}) => {
    return (
        <Link href='/posts/[id]' as={`posts/${post.id}`}>
            <a className={utilStyles.card}>
                <h3 className={utilStyles.listItem}>{post.title} &rarr;</h3>
                <p>{post.body}</p>
            </a>
        </Link>
    )
}

export default PostDetail;
