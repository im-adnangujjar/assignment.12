import React from 'react';
import { Row, Col } from "react-bootstrap";
import './HeaderSection.css';
export default function HeaderSection() {
  return (
    <div>
      <div>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <p className='paragraph5'>Search for Homes in your Neighborhood</p>
            <div>
              <p className='paragraph6'>Online Estate Agency, the modern way to sell your own home. You can use griffin residential to market your property.</p>
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between', margin: '15px 100px' }}>
              <div>
                <p className="paragraph7">Adders</p>
                <p className='paragraph8'>587 Bridgeton Road</p>
              </div>
              <div>
                <p className='paragraph7'>city</p>
                <p className='paragraph8'>El Paso, Texas</p>
              </div>
              <div className='buttons'>
                Search
              </div>
            </div>

          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <img src="assets/hero image.png" style={{width:"100%"}}/>
          </Col>
        </Row>
        <Row >
          <Col lg={1}></Col>

          <Col lg={2}><img src="assets/image 527.png" /></Col>
          <Col lg={2}><img src="assets/image 528.png" /></Col>
          <Col lg={2}><img src="assets/image 529.png" /></Col>
          <Col lg={2}><img src="assets/image 530.png" /></Col>
          <Col lg={2}><img src="assets/image 531.png" /></Col>

          <Col lg={1}></Col>

        </Row>
      </div>
    </div>
  );
}
