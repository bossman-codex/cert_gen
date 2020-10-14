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
               <a onClick={() =>paginate(number)}>
                {number}
               </a>
             </li>
            )}
           </ul> 
        </div>
    )
}

export default Pagination
