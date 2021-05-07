import React ,{useState} from 'react'
import auth from './auth'
import { useHistory, useLocation } from 'react-router-dom'
import './Styles/adminlogin.css' 

function AdminLogin(props) {
    const {loaduser} = props
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message , setmessage] = useState("")

    let history = useHistory()
    let location = useLocation();

   let { from } = location.state || { from: { pathname: "/adminhome" } };

    const onsubmit = (e) =>{
        e.preventDefault()
        fetch("https://heroku--server.herokuapp.com/signin",{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
                email : email,
                password : password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.ID) { 
                loaduser(user) 
                auth.login(()=>{
                     history.push(from);
                })
               
            } else{
                 setmessage("Wrong Credentials")
                 setpassword("")
            }
            
        })
        
        }
        
 
    return (
        <div className="back"> 
        
        <div className="appy">
       
        <form onSubmit ={onsubmit} >
        <h3>SIGN IN</h3>
        <label>Enter Email:</label>
        <div className="form-group">
          <input
          className="form-control"
          name="email"
          value={email}
          placeholder="Enter your Email" 
          onChange={(e)=>setemail(e.target.value) }
          />
          </div>
          
          <label>Enter Password:</label>
          <div className='form-group'>
          <input
          className="form-control"
          type="password"
          value ={password}
          placeholder='Enter Password'
          onChange={(e)=>setpassword(e.target.value) }
          onClick={()=>setmessage("")}
          />
         </div>
         <div style={{fontSize:20 , color:"red"}}>
          {message}
         </div>
         <div className="button">
          <button
          className=""
          onSubmit={onsubmit}
          >
           Submit
          
          </button>
          </div>
        </form>
     </div>
        </div>
    )
}

export default AdminLogin
