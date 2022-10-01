import { FC } from 'react'

import Post from '../../types/Post'

import PostItem from '../PostItem/PostItem'

import styles from './Posts.module.scss'

interface PostsProps {
    posts: Post[]
}

const Posts: FC<PostsProps> = ({ posts }) => {
    return (
        <div className={styles.container}>
            {posts.map(post =>
                <PostItem
                    key={post.id}
                    userId={post.userId}
                    title={post.title}
                    body={post.body}
                    id={post.id}
                />
            )}
        </div>
    )
}

export default Posts