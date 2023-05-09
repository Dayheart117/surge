

import { Outlet, useNavigate } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { Layout, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import "./NewsSandBox.css"

export default function NewsSandBox() {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <SideMenu></SideMenu>
      <Layout className="site-layout">

        <TopHeader></TopHeader>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div>News</div>

          {localStorage.getItem("token")}

          <button onClick={() => {
            localStorage.removeItem("token")
            navigate("/login")
          }}>注销</button>

          <div></div>
          
          {/* <NavLink to="/login">login</NavLink>
          <NavLink to="/home">home</NavLink>
          <NavLink to="/usermanage">usermanage</NavLink>
          <NavLink to="/rightmanage">rightmanage</NavLink> */}

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}


