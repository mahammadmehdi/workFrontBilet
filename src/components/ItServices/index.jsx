import React from 'react'
import "./index.scss"
import ItServicesCards from '../ItServicesCards'

function ItServices() {
  return (
    <div className='itServices'>
        <div className="itServicesAll">
            <div className="about">
                <div className='head'> INDUSTRY WE OFFER</div>
                <h4 className='main'>Managed IT services customized for your industry</h4>
                <p className='text'>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insurance, pharma & life sciences,</p>
            </div>
            <div className="cards">
<ItServicesCards icon={"fa-solid fa-landmark"}></ItServicesCards>
<ItServicesCards icon={"fa-solid fa-cart-shopping"}></ItServicesCards>
<ItServicesCards icon={"fa-solid fa-plane"}></ItServicesCards>
<ItServicesCards icon={"fa-solid fa-graduation-cap"}></ItServicesCards>



            </div>
        </div>
    </div>
  )
}

export default ItServices