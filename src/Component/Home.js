import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import "./Styles/display.css"

function Home({loadImg}) {
    const [cert ,setCert] = React.useState('')
    const [message , setmessage] =React.useState("")

    let history = useHistory()

//     const onsubmit = (e) =>{
//         e.preventDefault()
//         fetch("https://heroku--server.herokuapp.com/search",{
//            method : "post",
//            headers : {'Content-Type' : "application/json"},
//            body: JSON.stringify({
//                cert : cert,
//            })
//        })
//            .then(response => response.json())
//            .then(user => {
//                if (user.CertificateNumber) { 
                   
//                    loadsearch(user)
//                 //    history.push(`cert/:cert${user.Item}`);
//                    history.push(`/certificate/:${user.CertificateNumber}`);
//                }else{
//                    setmessage("Invalid Certificate number")  
//                }
               
//            })
           
//    }

    const onsubmit = (e) =>{
        const formData = new FormData();
        formData.append('certnumber', cert);
         e.preventDefault()
         axios.post('https://heroku--server.herokuapp.com/image', formData , {
        }).then(res=>{
         const pall=[]
           
             for (let i = 0; i < res.data.length; i++) { 
             pall.push(Buffer.from(res.data[i].image).toString('base64')) 
             
                 loadImg(pall)
                }
                   history.push(`/image/${cert}`)
                         
                     })  

                  .catch(err=>{
                              setmessage("Invaild Certificate Number")
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
        
       

