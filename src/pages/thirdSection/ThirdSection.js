import React from 'react';
import './ThirdSection.css'
import { Row, Col } from "react-bootstrap"

export default function ThirdSection() {
    return (
        <div>
            <div>
                <Row>
                    <Col lg={4} md={4} sm={4}>
                        <img style={{ margin: "60px 0px 0px 50px" }} src="assets/Ellipse 51.png" />
                        <div style={{ display: "flex", justifyContent: "center" ,}}>
                            <img src="assets/Ellipse 50.png" />
                        </div>
                        <div style={{textAlign:"end" }}>
                            <img  src="assets/Ellipse 53.png" />
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src="assets/Ellipse 52.png" />
                    </div>
                    </Col>
                    <Col lg={4}><p className='paragraphs8'>TESTIMONIALS</p>
                        <p className='paragraphs7'>Our Clients send us bunch of smilies with our services and we love them</p>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop:"50px" }}>
                            <img src="assets/Ellipse 50 (1).png" />
                        </div>
                        <div>
                            <p className="paragraphs5">We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
                        </div>  <p className='paragraphs6'>Becky Nelson</p>
                        <div className='images4'>
                            <img src="assets/Group 101.png" />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <div style={{ display: "flex", justifyContent: "center",marginTop: "60px " }}>
                            <img src="assets/Ellipse 54.png" />
                        </div>
                        <div style={{ margin:"0px" }}>
                            <img src="assets/Ellipse 57.png" />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src="assets/Ellipse 58.png" />
                        </div>
                        <div><img src="assets/Ellipse 55.png" /></div>
                    </Col>
                </Row>
            </div>



        </div>
    );
}
