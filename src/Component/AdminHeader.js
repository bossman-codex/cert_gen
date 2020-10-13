import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/header.css'

function AdminHeader({onRouteChange , Name}) {
    return (
        <div>
            <nav>
            <div>
            <h3>Welcome Admin {Name}</h3>
            </div>
             
              <div className="second">
              <Link to ="/user">
             <h3
             onClick = {() => onRouteChange('user')} 
             >Add User </h3>
             </Link>
             <Link to ="/cert">
             <h3>
             Add certificate
             </h3>
             </Link>
             <Link to ="/">
             <h3 
             onClick = {() => onRouteChange("signin")}>
             Log Out</h3></Link>
              </div>
            </nav>
        </div>
    )
}

export default AdminHeader
