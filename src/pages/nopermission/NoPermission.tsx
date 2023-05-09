import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NoPermission() {
    return (

        <div>NoPermission
            <NavLink to="/login">toLogin</NavLink>
        </div>
    )
}
