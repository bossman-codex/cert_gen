import React from 'react'
import './Styles/database.css'

function Datatable({data}) {
    const columns = data[0] && Object.keys(data[0])
    return (
        <table cellSpacing={0} cellPadding={0}>
          <thead>
           <tr>{data[0] && columns.map((heading) =>   <th>{heading}</th> )}
           </tr>
          </thead>
          <tbody>
          {data.map(row => <tr>
            {
                columns.map((column) => (
                <td>{row[column]}</td>
            ))}
            </tr> )}
          </tbody>
        </table>
    )
}

export default Datatable
