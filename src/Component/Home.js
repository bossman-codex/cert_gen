import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Styles/display.css"

function Home({loadsearch}) {
    const [cert ,setCert] = React.useState('')
    const [message , setmessage] =React.useState("")

    let history = useHistory()

    const onsubmit = (e) =>{
         e.preventDefault()
         fetch("https://heroku--server.herokuapp.com/search",{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
                cert : cert,
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.CertificateNumber) { 
                    loadsearch(user)
                    history.push(`/certificate/:${user.CertificateNumber}`);
                }else{
                    setmessage("Invalid Certificate number")  
                }
                
            })
            
    }
    return (
        <div className ="bod">
        <div className ="apps">
            <form onSubmit ={onsubmit}>
            <h3>
             Verify Certificate 
             </h3>
             <div className="form-group">
              <input
              className = "form-control"
               type = 'text'
               placeholder="Enter Certificate Number"
               value= {cert}
               onChange = {(e)=>setCert(e.target.value)}
              />
              </div>
             <div style={{fontSize:20 , color:"red"}}>
                 {message}
                </div>
               <div className="button">
              <button
              onSubmit ={onsubmit}
              >Enter</button>  
              </div>
            </form>

            
        </div>
        
        </div>
    )
}

export default Home
