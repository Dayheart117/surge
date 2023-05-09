

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div>login</div>
            <button onClick={()=>{
                localStorage.setItem("token","dayheart")
            }}>注册</button>
            <div></div>
            <NavLink to="/">newssandbox</NavLink>
        </div>
    )
}
