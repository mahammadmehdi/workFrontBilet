import React from 'react'
import "./index.scss"

function ItServicesCards({icon}) {
  return (
    <div className='itServicesCards'>

<div className={`${icon} icon`}></div>
<div className="title">Industries & Manufactring</div>
    </div>
  )
}

export default ItServicesCards