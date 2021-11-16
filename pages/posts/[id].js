import Link from 'next/link'

export const getServerSideProps = async (context) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()

    return{
        props: {
            post
        }
    }
}

export default function Post({post}) {

  return (
      <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br/>
          <Link href='/'>Go Back</Link>
      </div>

  )
}
