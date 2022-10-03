import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Layout, MenuProps } from 'antd'
import { HomeOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons'

import styles from './Sidebar.module.scss'

const { Sider } = Layout

interface SidebarProps {
    isAuth: boolean
}

const Sidebar: FC<SidebarProps> = ({ isAuth }) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()
    const headerItems: MenuProps['items'] = [
        {
            label: (
                <Link to='/'>Home</Link>
            ),
            key: '/',
            icon: <HomeOutlined />
        },
        {
            label: 'Tasks',
            key: 'tasksSubMenu',
            icon: <UnorderedListOutlined />,
            children: [
                {
                    label: (
                        <Link to='/task1'>Task 1</Link>
                    ),
                    key: '/task1'
                },
                {
                    label: (
                        <Link to='/task2'>Task 2</Link>
                    ),
                    key: '/task2'
                }
            ]
        },
        {
            label: (
                <Link to='/options'>Options</Link>
            ),
            key: '/options',
            icon: <SettingOutlined />,
            disabled: !isAuth
        }
    ]

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
            theme="dark"
        >
            <div className={styles.logo}>LOGO</div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                selectedKeys={[location.pathname]}
                items={headerItems}
            />
        </Sider>
    )
}

export default Sidebar