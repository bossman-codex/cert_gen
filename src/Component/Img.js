import React from 'react'

 

function Img({Img}) {
        return (
        <div
         style={{
             backgroundColor:"black",
             height:"100vh"
         }}
        >
        <header>
        {Img.map(p => {
            return <img 
            style={{
                    padding:"15px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    height: "50vh",
                    objectFit:"contain"
            }}
            key={(Math.random()* 100)} 
            alt="hello" 
            src={`data:image/jpeg;base64,${p}`} />
          })}
        </header>
        </div>
    )
    

   
}

export default Img
