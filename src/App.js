import React ,{useState} from 'react';
import './App.css';
import AddCert from './Component/AddCert';
import AddUser from './Component/AddUser';
// import AdminHeader from './Component/AdminHeader';
import AdminHome from './Component/AdminHome';
import AdminLogin from './Component/AdminLogin';
import Home from './Component/Home';
import FileUpload from "./Component/Img2"
import Img  from './Component/Img'
import Edit from './Component/Edit'
import Delete from './Component/Delete'
import PrivateRoute from "./Component/protected.route"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import 'tachyons'
import View from './Component/ViewImage';
import Footer from './Component/Footer';
import PDF from "./Component/PDF"
import Cert from "./Component/Cert"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./vendor/fontawesome-free/css/all.min.css"
import Dashboard from './Dashboard'; 

function App() {
  
  const [user, setUser] =useState({
    id: "",
    name:"",
    email:""
  })

  const [img ,setImg] = useState([])
  // const imglenth = img.length;

  const loaduser = (data)=>{
    setUser({
       id: data.ID,
       name:data.Name,
       email:data.Email
      })
  }

  const loadImg = data=>{
    Object.assign({}, [data]);
    setImg(data)    
  }
  
  return (
  <div>
<Router>
<Switch>
<PrivateRoute path ="/user">
<Dashboard Name = {user.name}>
<AddUser loaduser={loaduser}/>
</Dashboard>
<Footer/>
</PrivateRoute>

<PrivateRoute path ="/cert">
<Dashboard Name = {user.name} >
<AddCert loaduser={loaduser}/>
<Footer/>
</Dashboard>
</PrivateRoute>

<PrivateRoute path="/adminhome">
 <Dashboard Name = {user.name} > 
<AdminHome/>
<Footer/>
</Dashboard>
</PrivateRoute>

{/* <Route exact path ="/certificate/:cert">
<PDF Cert ={cert}>
<Cert Cert ={cert}/>
</PDF>
</Route> */}

<Route path ="/loginadmin">
<AdminLogin loaduser ={loaduser}/>
<Footer/>
</Route>


<Route path ="/image/:certificatenumber">
<Img 
Img ={img}
/>
</Route>

<PrivateRoute exact path ="/Edit">
<Dashboard Name = {user.name} >
<Edit />
<Footer/>
</Dashboard>
</PrivateRoute>

<PrivateRoute exact path ="/Delete">
<Dashboard Name = {user.name} >
<Delete/>
<Footer/>
</Dashboard>
</PrivateRoute>

<PrivateRoute exact path ="/upload">
<Dashboard Name = {user.name} >
<FileUpload/>
<Footer/>
</Dashboard>
</PrivateRoute> 

 <PrivateRoute exact path ="/viewimage">
<Dashboard Name = {user.name} >
<View
loadImg ={loadImg}
Img ={img}
/>
<Footer/>
</Dashboard>
</PrivateRoute>



<Route exact path ="/">
<Home 
loadImg ={loadImg}
Img ={img}
/>
<Footer/>
</Route>

<Route path ="*" component={()=>"404 NOT FOUND"}></Route>


</Switch>
  </Router>
  </div>
  );
}

export default App;
//