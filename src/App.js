import React ,{useState} from 'react';
import './App.css';
import AddCert from './Component/AddCert';
import AddUser from './Component/AddUser';
import AdminHeader from './Component/AdminHeader';
import AdminHome from './Component/AdminHome';
import AdminLogin from './Component/AdminLogin';
import Cert from './Component/Cert';
import Home from './Component/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Particles from 'react-particles-js';
import 'tachyons'
import UserRegister from './Component/UserRegister';
import PDF from './Component/PDF';



function App() {
  
  const [route , setRoute] = useState('signin')
  const [user, setUser] =useState({
    id: "",
    name:"",
    email:""
  })
  const [cert , setCert] = useState({
    companyname : "",
    testname: '',
    item: "",
    itemid: "",
    certificatenumber : ""
  })

  const loadsearch = (input) => {
    setCert({
       companyname : input.CompanyName,
       testname : input.TestName,
       item : input.Item,
       itemid : input.ItemIdentification,
       certificatenumber : input.CertificateNumber
    })
   

  }

  const loaduser = (data)=>{
    setUser({
       id: data.ID,
       name:data.Name,
       email:data.Email
      })
  }
  const onRoutechange = (route) =>{
     setRoute(route)
  }
  return (
    
  <div>
  <Particles
className="particles"
params={{
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}}
/>
<Router>
<Switch>
<Route path ="/user">
<AdminHeader/>
<AddUser loaduser={loaduser}/>
</Route>
<Route path ="/cert">
<AdminHeader Name = {user.name} />
<AddCert loaduser={loaduser}/>
</Route>
<Route path="/adminhome">
<AdminHeader Name = {user.name} />
<AdminHome/>
</Route>
<Route path ="/loginadmin">
<AdminLogin loaduser ={loaduser}/>
</Route>
<Route path ="/:cert">
<PDF Cert ={cert}>
<Cert Cert ={cert}/>
</PDF>
</Route>
<Route path ="/">
<Home loadsearch ={loadsearch}/>
</Route>

</Switch>

    { // route === "home"
  //   ? 
  //    <div>
  //       <AdminHeader  Name = {user.name} onRouteChange = {onRoutechange} />
  //       <AdminHome/>
  //   </div>
  //   :
  //   (
  //     route === "Login" 
  //     ? 
  //     <AdminLogin loaduser ={loaduser} onRouteChange = {onRoutechange} /> 
  //     :
  //     (
  //       route ==="cert"
  //       ?
  //       <AddCert  onRouteChange = {onRoutechange} />
  //       :
  //       (
  //         route === 'user'
  //         ?
  //         <AddUser loaduser={loaduser} onRouteChange={onRoutechange} />
  //         :
  //         <Home onRouteChange = {onRoutechange}/>
  //       )
        
  //     )
      
      
  //   )
  // 
}
  </Router>
  </div>
  );
}

export default App;
