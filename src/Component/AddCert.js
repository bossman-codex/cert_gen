import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import './Styles/cert.css'

 import "react-datepicker/dist/react-datepicker.css"


function AddCert() {
      const [companyname , setCompanyname] =useState('')
      const [testname , setTestname] =useState('')
      const [item , setItem] =useState('')
      const [itemid , setItemid] =useState('')
      const [refnumber , setRefnumber] =useState('')
      const [expires , setExpires] =useState(new Date())
      const [message , setmessage] = useState("")

      let history = useHistory()  

      const onsubmit = (e) =>{ 
        e.preventDefault()
        fetch("https://heroku--server.herokuapp.com/addcert" ,{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
              companyname : companyname,
              testname: testname,
              item: item,
              itemid : itemid,
              expires:expires,
              refnumber : refnumber
            })
        })
        .then(response => response.json())
        .then(users => {
            if (users==="success") {
              history.push('/adminhome');
            }else{
                setmessage("Incomplete Data")
           }
            
        })
       
        }
      
        const handlechange =(date)=>{
          setExpires(date)
         }

    return (
        <div className ="body">
        <div className ="app"><h3>ADD NEW CERTIFICATE</h3>
        <form  style={{height:"550px",overflowY:"auto"}} onSubmit={onsubmit}> 
        
        <h4>Company name:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="firstname"
        value ={companyname}
        onChange ={(e)=>{setCompanyname(e.target.value)}}
        />
        </div>
        <h4>Test Name</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="lastname"
        value ={testname}
        onChange ={(e)=>{setTestname(e.target.value)}}
        />
        </div>
        <h4>Item:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="lastname"
        value ={item}
        onChange ={(e)=>{setItem(e.target.value)}}
        />
        </div>
        <h4>Item Identification:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="lastname"
        value ={itemid}
        onChange ={(e)=>{setItemid(e.target.value)}}
        />
        </div>
        <h4>Reference Number:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="lastname"
        value ={refnumber}
        onChange ={(e)=>{setRefnumber(e.target.value)}}
        />
        </div>
        <h4>Expires Date</h4>
        <div className="form-group">
        <DatePicker 
            selected={ expires }
            onChange={handlechange}
            name="startDate"
            dateFormat="yyyy/MM/dd"
        />
        
      </div>
        <div style={{fontSize:20 , color:"red"}}>
        {message}
       </div>
        <div className ="button">
        <button 
        onSubmit ={onsubmit}
        >
          Submit
        </button>
        </div>
        </form>
        </div>
        
        </div>
    )
}

export default AddCert
