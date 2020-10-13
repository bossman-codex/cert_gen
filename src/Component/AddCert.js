import React,{useState} from 'react'

function AddCert({onRouteChange}) {
      const [companyname , setCompanyname] =useState('')
      const [testname , setTestname] =useState('')
      const [item , setItem] =useState('')
      const [itemid , setItemid] =useState('')

      const onsubmit = (e) =>{ 
        e.preventDefault()
        fetch("http://localhost:3030/addcert" ,{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
              companyname : companyname,
              testname: testname,
              item: item,
              itemid : itemid
            })
        })
        .then(response => response.json())
        .then(users => {
            if (users) {

                console.log(`welcome ${users}`)
            }
        })
       
        }
      
    return (
        <div className ="bodys">
        <div className ="apps">
        <form onSubmit={onsubmit}> 
        <h3>ADD NEW CERTIFICATE</h3>
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
