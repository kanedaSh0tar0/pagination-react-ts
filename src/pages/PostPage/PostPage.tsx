import { FC, useState, useEffect } from 'react'

import PaginationProps from '../../types/PaginationProps'
import Post from '../../types/Post'

import PaginationPanel from '../../components/PaginationPanel/PaginationPanel'
import Posts from '../../components/Posts/Posts'

import styles from './PostPage.module.scss'
import { BackTop } from 'antd'

type PaginationState = Omit<PaginationProps, 'classes' | 'onChangePage'>

const PostPage: FC = () => {
    const [pagination, setPagination] = useState<PaginationState>({
        activePage: 2,
        totalItems: 92,
        perPage: 10,
        withActions: false
    })
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${pagination.totalItems}`)
                const posts = await response.json()

                setPosts(posts)
            } catch (err) {
                alert(err)
            }
        })()
    }, [])

    const handleChangePage = (newPage: number): void => {
        setPagination(prev => { return { ...prev, activePage: newPage } })
    }

    const handleChangePerPage = (perPage: number): void => {
        setPagination(prev => { return { ...prev, perPage } })
    }

    const handleChangeActions = () => {
        setPagination(prev => { return { ...prev, withActions: !prev.withActions } })
    }

    return (
        <>
            <BackTop />
            <PaginationPanel
                handleChangePerPage={handleChangePerPage}
                handleChangeActions={handleChangeActions}
                activePage={pagination.activePage}
                totalItems={pagination.totalItems}
                perPage={pagination.perPage}
                onChangePage={handleChangePage}
                withActions={pagination.withActions}
                classes={{ activeBtn: styles.activeBtn }}
            />
            {!posts.length
                ?
                <h1 style={{ fontSize: '28px', textAlign: 'center' }}>Loading...</h1>
                :
                <Posts posts={posts.slice(pagination.perPage * (pagination.activePage - 1), pagination.activePage * pagination.perPage)} />
            }
        </>
    )
}

export default PostPage