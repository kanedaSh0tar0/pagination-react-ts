import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout, Button } from 'antd'

import PostPage from '../../pages/PostPage/PostPage'
import TaskFirst from '../../pages/TaskFirst/TaskFirst'
import Home from '../../pages/Home/Home'
import Options from '../../pages/Options/Options'
import PrivateRoute from '../PrivatRoute/PrivateRoute'
import Sidebar from '../Sidebar/Sidebar'

import styles from './App.module.scss'
import 'antd/dist/antd.css'

const { Header, Footer, Content } = Layout

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(JSON.parse(localStorage.getItem('isAuth') || 'false'))

  const auth = () => {
    localStorage.setItem('isAuth', JSON.stringify(!isAuth))
    setIsAuth(prev => !prev)
  }

  return (
    <BrowserRouter>
      <Layout className={styles.mainLayout}>
        <Sidebar isAuth={isAuth} />
        <Layout>
          <Header className={styles.header}>
            <Button onClick={auth}>{!isAuth ? 'Login' : 'Logout'}</Button>
          </Header>
          <Layout className={styles.contentLayout}>
            <Content className={styles.content}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/task1' component={TaskFirst} />
                <Route path='/task2' component={PostPage} />
                <PrivateRoute path='/options' component={Options} />
              </Switch>
            </Content>
          </Layout>
          <Footer className={styles.footer}>Incora Coding Camp homework ©2022 created by Antonov Nikita</Footer>
        </Layout>
      </Layout>

    </BrowserRouter>
  );
}

export default App;
