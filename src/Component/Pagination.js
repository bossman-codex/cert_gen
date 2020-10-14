import React from 'react'
import './Styles/pagination.css'

function Pagination({postperpage ,totalpost , paginate}) {
 const pagenumbers =[]

 for(let i =1; i<= Math.ceil(totalpost / postperpage); i++){
     pagenumbers.push(i)
 }

    return (
        <div>
           <ul>
           {pagenumbers.map(number =>
             <li key ={number} className="">
               <button style ={{ 
                fontSize: "15px",
                padding: "10px",
                borderRadius: 10,
                margin: 20
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
