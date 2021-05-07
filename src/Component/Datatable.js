import React from 'react'
// import './Styles/database.css'



function Datatable({data}) {
    const columns = data[0] && Object.keys(data[0])
    
  
    return (
      
        
        <div style={{overflowX:"auto"}}>
        <table cellSpacing={0} cellPadding={0}>
          <thead>
           <tr>   
           <th>Certificate Name</th>
           <th>Test Item</th>
           <th>Item</th>
           <th>Item Identification</th>
           <th>Reference Number</th>
           <th>Expires On:</th>
           <th>Certificate Number</th>
           </tr>
          </thead>
          <tbody key={Math.random()} >
          {data.map(row => <tr key={Math.random()}>
                 
         
            {columns.map((column) => ( 
                <td key={Math.random()} style={{color:new Date() > new Date(row[column]).setDate(new Date(row[column]).getDate() )? "red" : "black"}}>{(row[column])}</td>
            ))}
            </tr> )}
          </tbody>
        </table>
        </div>
     
    )
}

export default Datatable
