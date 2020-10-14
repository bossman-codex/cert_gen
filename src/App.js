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
import 'tachyons'
import PDF from './Component/PDF';



function App() {
  
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
  return (
    
  <div>
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
<Route path ="/certificate">
<PDF Cert ={cert}>
<Cert Cert ={cert}/>
</PDF>
</Route>
<Route path ="/">
<Home loadsearch ={loadsearch}/>
</Route>

</Switch>
  </Router>
  </div>
  );
}

export default App;
