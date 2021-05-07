import React from 'react'

function Cert({Cert}) {
    return (
        <div style={{margin:"1%"}}>
        <div style={{marginRight:"3%", color:"black"}}>
            <h3 style={{margin:"3%"}}>Certificate name : {Cert.companyname} </h3>
            <h3 style={{margin:"3%"}}>TestName : {Cert.testname}</h3>
            <h3 style={{margin:"3%"}}>Item : {Cert.item} </h3>
            <h3 style={{margin:"3%"}}>ItemId : {Cert.itemid}</h3>
            <h3 style={{margin:"3%"}}>CertificateNumber : {`${Cert.refnumber}/${Cert.certificatenumber}`}</h3>
            <h3 style={{margin:"3%"}}>Expires On : {Cert.expires}</h3>
        </div>
        
      </div>
    )
}

export default Cert
