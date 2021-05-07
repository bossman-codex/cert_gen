import React, {useState} from 'react'

function UserRegister() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')


    const onsubmit = (e) =>{
        fetch("https://heroku--server.herokuapp.com/register" ,{
            method : "post",
            headers : {'Content-Type' : "application/json"},
            body: JSON.stringify({
                name : name,
                email : email,
                password : password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                console.log(`welcome ${name}`)
            }
        })
        e.preventDefault()
        }



    return (
        <div>
        <div className="App">
        <form onSubmit ={onsubmit} >
            <input
            className=""
            type="name"
            value ={name}
            placeholder='Enter Name'
            onChange={(e)=>setname(e.target.value) }
            />

            <input
            className=""
            name="email"
            value={email}
            placeholder="Enter your Email" 
            onChange={(e)=>setemail(e.target.value) }
            />

            <input
            className=""
            type="password"
            value ={password}
            placeholder='Enter Password'
            onChange={(e)=>setpassword(e.target.value) }
            />

            <button
            className=""
            onSubmit={onsubmit}
            >
            Submit
            </button>
        </form>
     </div>
        </div>
    )
}

export default UserRegister
