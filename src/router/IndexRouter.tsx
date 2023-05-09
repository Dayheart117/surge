

import React from 'react'
import NewsSandBox from '../pages/sandbox/NewsSandBox'
import UserManage from '../pages/sandbox/user-manage/UserList'
import Login from '../pages/login/Login'
import Home from '../pages/sandbox/home/Home'
import RightManage from '../pages/sandbox/right-manage/RightList'
import RoleList from '../pages/sandbox/right-manage/RoleList'
import { Router, useRoutes } from 'react-router-dom'

const GetRecRoutes = () => {
    const routes = useRoutes([
        {
            path: "",
            element: <NewsSandBox />,
            children: [
                {
                    path: "home",
                    element: <Home />,
                },
                {
                    path: "user-manage",
                    children: [
                        {
                            path: "list",
                            element: <UserManage />,
                        },
                    ],
                },
                {
                    path: "right-manage",
                    children: [
                        {
                            path: "role/list",
                            element: <RightManage />,
                        },
                        {
                            path: "right/list",
                            element: <RoleList />,
                        },
                    ],
                },
                {
                    path: "news-manage",
                    children: [
                        {
                            path: "draft",
                            element: <RightManage />,
                        },
                        {
                            path: "category",
                            element: <RoleList />,
                        },
                    ],
                },
            ]
        },
    ]);
    return routes;
}


// const GetLoginRoutes = ()=>{
//     const routes = useRoutes([
//         {
//             index: true,
//             path: "/login",
//             element: <Login />
//         },
//     ])
//     return routes
// }

export default () => {
    const routes = useRoutes([
      {
        path: '/*',
        element: <GetRecRoutes />,
      },
      {
        path:'/login/*',// 末尾的 /* 必不可少
        element: <Login />,
      },
      {
        path:'/news/*',// 末尾的 /* 必不可少
        element: <Login />,
      },
      {
        path: '*', // 这个404页面不会被匹配到
        element: <div>404</div>,
      }
    ])
    return routes;
  }


