import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Styles/display.css"

function Home({loadsearch}) {
    const [cert ,setCert] = React.useState('')

    let history = useHistory()

    const onsubmit = (e) =>{
         e.preventDefault()
         fetch("http://localhost:3030/search",{
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
                    console.log("hello")
                }
                history.push(`/:certnumber ${user.CertificateNumber}`);
                
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
