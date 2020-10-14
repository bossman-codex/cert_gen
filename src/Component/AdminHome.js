import React,{useState , useEffect} from 'react'
import Datatable from './Datatable'
import "./Styles/AdminHome.css"
import Pagination from './Pagination'

function AdminHome() {
      const [data , setData] = useState([])
      const [searchfield , setSearchfield] = React.useState('')
      const [currentpage ,setCurrentpage] = useState(1)
      const [postperpage] = useState(6)
     


      useEffect(() => { 
          fetch("https://heroku--server.herokuapp.com/table" ) 
          .then(response => response.json())
          .then(data =>setData(data))

      }, [])

 const onSearchChange=(event)=>{
    setSearchfield (event.target.value) 
     
  }

  const paginate = (pagenumber) => setCurrentpage(pagenumber)
//   const filteredRobots(rows) = rows.filter ( row =>{
//     return row.companyname.toLowerCase().includes(searchfield.toLowerCase());
   
//  } )  
function search(rows){
  const columns = rows[0]&& Object.keys(rows[0])
  return rows.filter((row) => 
    columns.some((columns) =>row[columns].toString().toLowerCase().includes(searchfield.toLowerCase()))
    )
}

const indexOfLastPost = currentpage * postperpage
const indexOfFirstPost =indexOfLastPost - postperpage
const currentPost = data.slice(indexOfFirstPost ,indexOfLastPost)

    return (


        <div className='container'>
          <div>
          <div className ="pa3">
          <input
           className= 'pa3 bg-lightest-blue'
           type='search' 
           placeholder='Search For....'
           value={searchfield}
           onChange = {onSearchChange} 
          />
          </div>
           <div>
            <Datatable data={search(currentPost)}/>
            <Pagination postperpage={postperpage} totalpost={data.length} paginate ={paginate } />
           </div>
        </div>
        </div>
    )
}

export default AdminHome
