import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './FourthSection.css'


export default function FourthSection() {
  return (
    <div>
      <div className='color'>
        <div>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <p className='paragraph3'>Talk to a Redfin Agent</p>
              <div><p className='paragraph4'>Start your search with an expert local agent—there’s no pressure or obligation.</p></div>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <p className='p4'>Where are you searching for homes?</p>
            <div className='subDiv1'>
              <input type="text" placeholder='City, Addres,ZIP' className='input' /><div></div><img src="./assets/search.png" />
           </div>
            </Col>
          </Row>

        </div>
      </div>
    </div>

  )
}
