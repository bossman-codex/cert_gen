import React ,{useState} from 'react'
import './Styles/user.css'
import {useHistory} from 'react-router-dom'

function AddUser({onRouteChange , loaduser}) {
   
        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [name, setname] = useState('')
        const [message , setmessage] = useState("")
      
        let history = useHistory()
    
        const onsubmit = (e) =>{
            fetch("http://localhost:3030/register" ,{
                method : "post",
                headers : {'Content-Type' : "application/json"},
                body: JSON.stringify({
                    name : name,
                    email : email,
                    password : password
                })
            })
            .then(response => response.json())
            .then(users => {
                if (users.id) {
                    history.push('/adminhome');
                }else{
                    setmessage("Incomplete Data")
               }
            })
            e.preventDefault()
            }
    
    
    
        return (
            <div className = "bodys">
            <div className="apps">
            <form onSubmit ={onsubmit} >
            <h3>ADD NEW USER</h3>
            <label>Enter Name</label>
                <input
                className="form-control"
                type="name"
                value ={name}
                placeholder='Enter Name'
                onChange={(e)=>setname(e.target.value) }
                />
            <label>Enter Email</label>
                <input
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your Email" 
                onChange={(e)=>setemail(e.target.value) }
                />
    
            <label>Enter Password</label>
                <input
                className="form-control"
                type="password"
                value ={password}
                placeholder='Enter Password'
                onChange={(e)=>setpassword(e.target.value) }
                />
                <div style={{fontSize:24 , color:"red"}}>
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

export default AddUser
