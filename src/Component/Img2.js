import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom'
import "../Component/Styles/images.css"

function FileUpload({loadImg}) {

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [certnumber , setCertnumber] =useState("")
    const [message , setmessage] = useState("")
    const el = useRef(); // accesing input element

    const handleChange = (e) => {

        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }
    let history = useHistory()
    const uploadFile = (e) => {
        e.preventDefault()
        // appending file
        const formData = new FormData();
        formData.append('file', file);
        formData.append('Certnumber', certnumber);
        
        fetch("https://heroku--server.herokuapp.com/upload" ,{
            method : "post",
            body: formData
            })
            .then(response => response.json())
            .then(res=>{
                console.log(res)
                    if (res === "success") {
                        history.push('/adminhome')
                      }else{
                          setmessage("Invalid Certificate Number")
                     }    
                             })
                          .catch(err=>{
                                       console.log("error")
                                   })
    }

    return (

        <div className ="bodie">
        <div className ="appie">
        <form> 
        <h3>ADD IMAGE</h3>
        <label>Certificate Number:</label>
        <div className="form-group">
        <input 
        className="form-control" 
        type="text" 
        name="firstname"
        value ={certnumber}
        onChange={(e)=>setCertnumber(e.target.value)}
        />
        </div>
        <label>Select Image</label>
        <div className="form-group">
        <input
        className="input" 
        type="file" 
        ref={el} 
        onChange={handleChange} 
        />
        </div> 
        <div style={{color:message==="successful" ? "green" : "red",fontSize:20}  }>
            {message}
           </div>
        <div className="form-groups">
                <button onClick={uploadFile} className="upbutton">
                   Upload images
                </button>
            </div>
           
           </form>
        </div>
        
        </div>
        
      
      
      
      

       
    )
}

export default FileUpload;