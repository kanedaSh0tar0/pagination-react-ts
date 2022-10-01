import { FC } from 'react';

import Post from '../../types/Post';

import styles from './PostItem.module.scss'

const PostItem: FC<Post> = ({ userId, title, body, id }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.postId}>{id}</h3>
            <div>
                <h3>{`User: ${userId}`}</h3>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

        </div>
    )
}

export default PostItem