import React from 'react'
import './Styles/pagination.css'

function Pagination({postperpage ,totalpost , paginate}) {
 const pagenumbers =[]

 for(let i =1; i<= Math.ceil(totalpost / postperpage); i++){
     pagenumbers.push(i)
 }

    return (
        <div>
           <ul className="unlist">
           {pagenumbers.map(number =>
             <li key ={number} className="list">
               <button style ={{ 
                backgroundColor: "#056e5b",
                fontSize: "15px",
                padding: "10px",
                borderRadius: 5,
                margin: 10
                }} onClick={() =>paginate(number)}>
                {number}
               </button>
             </li>
            )}
           </ul> 
        </div>
    )
}

export default Pagination
