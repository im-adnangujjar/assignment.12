import React from 'react';
import './FooterSection.css'
import { Row, Col } from 'react-bootstrap'
export default function () {
    return (
        <div>
            <Row>
                <Col lg={3} md={3} sm={6}>
                    <div>
                        <h3 className='paragraph1'>Popular Searches</h3>
                    </div>
                    <div>
                        <p className='paragraph2'>Apartment for Rent</p>
                        <p className='paragraph2'>Apartment Low to hide</p>
                        <p className='paragraph2'> Offices for Buy</p>
                        <p className='paragraph2'>Offices for Rent</p>
                    </div>
                </Col>
                <Col lg={3} md={3}sm={16}><h3 className='paragraph1'>About Us</h3>
                    <p className='paragraph2'>Our Story</p>
                    <p className='paragraph2'>Team Members</p>
                    <p className='paragraph2'>Careers</p>
                    <p className='paragraph2'>  Contact Us</p>
                    
                </Col>
                <Col lg={3} md={3} sm={16}><h6 className='paragraph1'>Quick links</h6>
                   
                    <p className='paragraph2'> Terms of Use</p>
                    <p className='paragraph2'>  Privacy Policy</p>
                    <p className='paragraph2'>   Contact Support</p>
                    <p className='paragraph2'> FAQs</p>
                    </Col>

                <Col lg={3} md={3} sm={6}>
                    <h3 className="paragraph1">Support</h3>
                    <p className='paragraph2'>Help Center</p>
                    <p className='paragraph2'>Loan Support</p>
                    <p className='paragraph2'>Managment</p>
                    <p className='paragraph2'> Privacy Policy</p>
                </Col>
            </Row>
            <Row>
                <Col lg={6}md={3}><h5 style={{margin:"0px 30px"}}>besnik</h5></Col>
                <Col lg={6}md={3}><p style={{textAlign:"center" , color: "#A2AFBD"}}>© 2021 Besnik. All Rights Reserved</p></Col>
            </Row>
        </div>
    );
}
