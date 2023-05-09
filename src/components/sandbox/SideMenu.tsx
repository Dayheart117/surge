

import { Menu, MenuProps } from 'antd'
import Sider from 'antd/es/layout/Sider'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined
} from '@ant-design/icons';
import "./SideMenu.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { concat } from "lodash"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// const items: MenuProps['items'] = 
// [
//   {
//     key: '/main/home',
//     icon: <UserOutlined />,
//     label: '首页',

//   },
//   getItem('用户管理', '/main/user-manage', <SettingOutlined />, [
//     getItem('用户列表', '/main/user-manage/list'),
//   ]),
//   getItem('权限管理', '/main/right-manage', <SettingOutlined />, [
//     getItem('角色列表', '/main/right-manage/role/list'),
//     getItem('权限列表', '/main/right-manage/right/list'),
//   ]),
//   // getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
//   {
//     key: '/icon',
//     icon: <VideoCameraOutlined />,
//     label: '图片展示',
//   },
//   {
//     key: '/login',
//     icon: <UploadOutlined />,
//     label: '图片展示',
//   },
// ];

export default function SideMenu(props: any) {
  const [menu, setMenu] = useState([])
  const items: MenuProps['items'] = menu
  useEffect(() => {
    axios.get("http://localhost:8000/rights?_embed=children").then(res => {
      let temp: any = []
      res.data.map((item: any) => {

        if (item.children.length === 0) {
          item.children = undefined
        } else {
          item.children = item.children.filter((item: any) => {
            return item.pagepermission
          })
        }
        temp = concat(temp, item)
      })
      console.log(temp)
      setMenu(temp)
    })
  }, [])

  const navigate = useNavigate()
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo">润华图文</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        onClick={(e) => navigate(e.key)}
      />
    </Sider>
  )
}
