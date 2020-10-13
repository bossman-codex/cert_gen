import React from 'react'
import PDF from './PDF'

function Cert({Cert}) {
    return (
        
        <div>
            <h3>Certificate name : {Cert.companyname} </h3>
            <h3>TestName : {Cert.testname}</h3>
            <h3>Item : {Cert.item} </h3>
            <h3>ItemId:{Cert.itemid}</h3>
            <h3>CertificateNumber :{Cert.certificatenumber}</h3>
        </div>
      
    )
}

export default Cert
{
    // <Cert Cert ={{//cert}}/>}
}