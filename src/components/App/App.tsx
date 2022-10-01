import { useEffect, useState } from 'react'

import PaginationProps from '../../types/PaginationProps';

import Post from '../../types/Post';

import ControlForm from '../ControlForm/ControlForm';
import PaginationPanel from '../PaginationPanel/PaginationPanel';
import Posts from '../Posts/Posts';

import styles from './App.module.scss'

type PaginationState = Omit<PaginationProps, 'classes' | 'onChangePage'>

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [pagination, setPagination] = useState<PaginationState>({
    activePage: 2,
    totalItems: 56,
    perPage: 10,
    withActions: false
  })

  async function fetchPosts() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${pagination.totalItems}`)
      const posts = await response.json()

      setPosts(posts)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleChangePage = (newPage: number): void => {
    setPagination(prev => { return { ...prev, activePage: newPage } })
  }

  const handleChangePerPage = (perPage: number): void => {
    setPagination(prev => { return { ...prev, perPage, activePage: 1 } })
  }

  const handleChangeActions = () => {
    setPagination(prev => { return { ...prev, withActions: !prev.withActions } })
  }

  return (
    <div className={styles.App}>
      <ControlForm
        handleChangePerPage={handleChangePerPage}
        handleChangeActions={handleChangeActions}
        perPage={pagination.perPage}
        actions={pagination.withActions || false}
      />
      <PaginationPanel
        activePage={pagination.activePage}
        totalItems={pagination.totalItems}
        perPage={pagination.perPage}
        onChangePage={handleChangePage}
        withActions={pagination.withActions}
        classes={{ activeBtn: styles.activeBtn }}
      />
      <span className={styles.totalPosts}>{pagination.totalItems} posts</span>
      {!posts.length
        ?
        <h1>Loading...</h1>
        :
        <Posts posts={posts.slice(pagination.perPage * (pagination.activePage - 1), pagination.activePage * pagination.perPage)} />
      }
    </div>
  );
}

export default App;
