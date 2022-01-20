import React from 'react';
import"./FirstSection.css"
import { Row , Col} from 'react-bootstrap';
export default function FirstSection() {
  return(
   <div style={{margin:"44px, 30px"}}>
<h3 className='heading5'>What Can We Help You Find?</h3>
<div>
    <Row>
        <Col lg={4}>
        <div className='images2'>
        <img  src="assets/icon 01.png" className='images2'/>
        </div>
        <p className='paragraphs1'>Buy a home</p>
        <p className='paragraphs2'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
        </Col>
        <Col lg={4}>
        <div className='images2'>
        <img src="assets/Vector.png" />
        </div>
        <p className='paragraphs1'>Rent a home</p>
        <p className='paragraphs2'>With 35+ filters and custom keyword search, Trulia can help you
 find a home.</p>
        </Col>
        <Col lg={4}>
        <div className='images2'>
        <img src="assets/icon 03.png"/>
        </div>
        <p className='paragraphs1'>See neighborhoods</p>
        <p className='paragraphs2'>With more neighborhood insights than any other real estate
website.</p>
        </Col>
    </Row>
</div>
  </div>
  )
}
