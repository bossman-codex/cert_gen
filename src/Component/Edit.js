import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import './Styles/edit.css'

import "react-datepicker/dist/react-datepicker.css"

function Edit() {
      const [companyname , setCompanyname] =useState('')
      const [testname , setTestname] =useState('')
      const [item , setItem] =useState('')
      const [itemid , setItemid] =useState('')
      const [refnumber , setRefnumber] =useState('')
      const [expires , setExpires] =useState(new Date())
      const [certnumber , setCertnumber] =useState('')
      const [message , setmessage] = useState("")

      let history = useHistory()
     
      const onsubmit = (e) =>{ 
        e.preventDefault()
        fetch("https://heroku--server.herokuapp.com/update" ,{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
              companyname:companyname,
              testname: testname,
              item: item,
              itemid : itemid,
              expires:expires,
              refnumber : refnumber,
              certnumber:certnumber
            })
        })
        .then(response => response.json())
        .then(users => {
            if (users==="user") {
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
        <div className ="boda">
        <div className ="appa">
        <form onSubmit={onsubmit}> 
        <h3>EDIT CERTIFICATE</h3>
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
        name="name"
        value ={testname}
        onChange ={(e)=>{setTestname(e.target.value)}}
        />
        </div>
        <h4>Item:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="name"
        value ={item}
        onChange ={(e)=>{setItem(e.target.value)}}
        />
        </div>
        <h4>Item Identification:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="name"
        value ={itemid}
        onChange ={(e)=>{setItemid(e.target.value)}}
        />
        </div>
        <h4>Reference Number:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="name"
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
            dateFormat="MM/dd/yyyy"
        />
        
      </div>
        <h4>Certificate Number:</h4>
        <div>
        <input 
        className="form-control" 
        type="text" 
        name="name"
        value ={certnumber}
        onChange ={(e)=>{setCertnumber(e.target.value)}}
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

export default Edit
