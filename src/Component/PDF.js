import React from 'react'
import Pdf from 'react-to-pdf'


const ref = React.createRef()

function PDF(props) {
    const {Cert} = props
    return (
        
        <>
        <div className="Post" ref={ref}>
            {props.children}
        </div>
        <Pdf targetRef={ref} filename={`${Cert.certificatenumber}.pdf`}>
          
         {({toPdf}) => <button onClick={toPdf}>Download As PDF</button>}
        </Pdf>
        </>
    )
}

export default PDF
