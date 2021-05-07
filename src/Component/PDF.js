import React from 'react'
import Pdf from 'react-to-pdf'


const ref = React.createRef()


function PDF(props) {
    return (
        <>
        <div className="Post" ref={ref}>
            <div>
               <div>   </div>
               <br></br>
               <br></br>
                 {props.children}
            </div>
           
        </div>
        <Pdf targetRef={ref} filename={`CustomName.pdf`} style={{marginBottom:"10%"}}>
         {({toPdf}) => <button style={{marginLeft:"50vw"}} onClick={toPdf}>Download As PDF</button>}
        </Pdf>
        </>
    )
}

export default PDF
