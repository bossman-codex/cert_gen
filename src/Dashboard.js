import React from 'react'
// import Body from './Body'
import auth from "./Component/auth"
import { useHistory} from 'react-router-dom'
import "./CSS/sb-admin-2.css"
import logo from './Component/Styles/log8.png'

function Dashboard(props) {
    const [menu] =React.useState("sidebar-toggled");
    const [menuII] =React.useState("toggled");
    const [done,  Setdone] = React.useState(false)

    const Clicked =()=>{
      Setdone(!done)
    }

    let history =useHistory()
    return (
        <div id="page-top" className={done?menu:null} >
        <div id="wrapper">
                    {/* <!-- Sidebar --> */}
        <ul className ={` navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${done?menuII:null}` } id="accordionSidebar">
        


            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
    <h5 style={{fontSize:"10px"}}>Welcome,{props.Name}</h5>
                </div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"></hr>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item">
                <li className="nav-link" href="/adminhome">
                    <i className="fas fa-home"></i>
                    <span style={{cursor:"pointer"}} onClick={() => {
                    auth.login(() => history.push("/adminhome"));
                  }}>Dashboard</span></li>
                   
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}

            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Edit</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white collapse-inner rounded">
                        <li style={{cursor:"pointer"}} className="collapse-item" onClick={() => {
                         auth.login(() => history.push("/Edit"));
                        }}>Edit Table</li>
                        <li style={{cursor:"pointer"}} className="collapse-item" onClick={() => {
                         auth.login(() => history.push("/delete"));
                        }}>Delete</li>
                    </div>
                </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#!" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white collapse-inner rounded">
                    <li style={{cursor:"pointer"}} className="collapse-item" onClick={() => {
                         auth.login(() => history.push("/cert"));
                        }}>Add Certificate</li>
                        <li style={{cursor:"pointer"}} className="collapse-item" onClick={() => {
                         auth.login(() => history.push("/user"));
                        }}>Add User</li>
                         <li style={{cursor:"pointer"}} className="collapse-item" onClick={() => {
                         auth.login(() => history.push("/upload"));
                        }}>Add Image</li>
                         <li style={{cursor:"pointer"}} className="collapse-item" onClick={() => {
                         auth.login(() => history.push("/viewimage"));
                        }}>View Image</li>
                    </div>
                </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>


            {/* <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item active">
            <li className="nav-link" href="#!">
                    <i className="fas fa-sign-out-alt"></i>
                    <span style={{cursor:"pointer"}} onClick={() => {
       auth.logout(() => history.push("/"));
     }}>Log Out</span>
             </li>       
            </li>
        </ul>
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3" onClick={Clicked}>
                        <i className="fa fa-bars"></i>
                    </button>

                    

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
                </nav>
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid"> 
                {props.children}
                </div>
                {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}
        </div>
        
        </div>
        </div>
    )
}

export default Dashboard
