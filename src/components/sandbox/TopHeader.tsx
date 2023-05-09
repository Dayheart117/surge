

import { useState } from 'react'
import { Avatar, Dropdown, Layout, MenuProps, Space, theme } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout

export default function TopHeader() {
  const navigate = useNavigate()
  const [collapsed, setcollapsed] = useState(false);
  const changeCollapsed = () => {
    setcollapsed(!collapsed)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        "超级管理员"
      ),
    },
    {
      key: '2',
      label: (
        222
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        333
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label:
        <a onClick={() => {
          localStorage.removeItem("token")
          navigate("/login")
        }}>退出</a>
      ,
    },
  ];

  return (
    <Header style={{ padding: "0 16px", background: colorBgContainer }}>

      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: () => setCollapsed(!collapsed),
    })} */}

      {
        collapsed ? <MenuUnfoldOutlined onClick={
          changeCollapsed
        } /> : <MenuFoldOutlined onClick={
          changeCollapsed
        } />
      }

      <div style={{ float: "right" }}>
        <span>欢迎admin回来</span>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()} href="/#">
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </div>

    </Header>
  )
}
