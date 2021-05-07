import React from 'react'
import { useHistory } from 'react-router-dom'
import auth from "./auth"
import './Styles/header.css'
import logo from './Styles/log8.png'
import Burger from "./Burger"

function AdminHeader({Name}) {
    let history = useHistory()
    return (
        <div>
            <nav>
            <div>
            <h5
            style={{
                cursor:"pointer"
             }}
            onClick={() => {
            auth.login(() => history.push("/adminhome"));
                  }}
            >Hello, Admin {Name}</h5>
            </div>

             <img 
             style={{
               cursor:"pointer",
               marginLeft:"4%"
            }}
             alt ="logo"
             src = {logo}
             onClick={() => {
              auth.login(() => history.push("/adminhome"));
                    }}
             />

              <Burger/>

            </nav>
        </div>
    )
}

export default AdminHeader
