import React from 'react';
import { Row, Col } from "react-bootstrap";
import "./SecondSection.css"
export default function SecondSection() {
    return (
        <div>
            <Row>
                <Col lg={6}>
                    <p className='paragraphs3'>Our trending latest proparty</p>
                    <p className='paragraphs4'>Our unique process gives you peace of mind from home rent to services</p>
                </Col>
                <Col lg={6}>
                    <div className='flex'>
                        <select >

                            <option value="proparty types">Proparty type</option>
                            <option value="saab">shop</option>
                            <option value="mercedes">kamrshal zone</option>
                            <option value="audi">Home</option>
                        </select>
                        <div className='button3'>See All Proparty</div>
                    </div>
                </Col>

            </Row>
            <div>
                <Row>
                    <Col lg={6}>
                        <div className='display4'>
                            <div style={{ width: "45px" }}>
                                <img src="assets/pexels-expect-best-1269560 1.png" />
                            </div>
                            <div style={{ width: "45%", paddingTop: "10px" }}>
                                <div className='display5'>
                                    <p className='price'>$259,000</p>
                                    <img src="assets/group.png" />
                                </div>
                                <p className='case'>Case Alda</p>
                                <p className='tribune'>Co Rd Tribune Tribune</p>
                                <div className='display5'>
                                    <img src="assets/vectors.png" className='images3' /><p>2 Beds</p>
                                    <img src="assets/Group 4957.png" className='images3' /><p>2 Bath</p>
                                </div>
                                <div className='button'>View Details</div>

                            </div>
                        </div>
                        <div className='display4'>
                            <div style={{ width: "45px" }}>
                                <img src="assets/image.png" />
                            </div>
                            <div style={{ width: "45%", paddingTop: "10px" }}>
                                <div className='display5'>
                                    <p className='price'>$289,000</p>
                                    <img src="assets/Group 4965.png" />
                                </div>
                                <p className='case'>Supper Delax Home</p>
                                <p className='tribune'>1398 Lynford Dr SW, Atlanta</p>
                                <div className='display5'>
                                    <img src="assets/vectors.png" className='images3' /><p>2 Beds</p>
                                    <img src="assets/Group 4957.png" className='images3' /><p>2 Bath</p>
                                </div>
                                <div className='button1'>View Details</div>
                            </div>
                        </div>

                    </Col>
                    <Col lg={6}>
                        <div className='display4'>
                            <div style={{ width: "45px" }}>
                                <img src="assets/iamge.png" />
                            </div>
                            <div style={{ width: "45%", paddingTop: "10px" }}>
                                <div className='display5'>
                                    <p className='price'>$229,000</p>
                                    <img src="assets/Group 4965.png" />
                                </div>
                                <p className='case'>Langes Beach House</p>
                                <p className='tribune'>375 Highland Ave NE UNIT 1002</p>
                                <div className='display5'>
                                    <img src="assets/vectors.png" className='images3' /><p>2 Beds</p>
                                    <img src="assets/Group 4957.png" className='images3' /><p>2 Bath</p>
                                </div>
                                <div className='button1'>View Details</div>
                            </div>
                        </div>
                        <div className='display4'>
                            <div style={{ width: "45px" }}>
                                <img src="assets/image (1).png" />
                            </div>
                            <div style={{ width: "45%", paddingTop: "10px" }}>
                                <div className='display5'>
                                    <p className='price'>$329,000</p>
                                    <img src="assets/Group 4965.png" />
                                </div>
                                <p className='case'>Clinton Villa</p>
                                <p className='tribune'>675 Albert St NW, Atlanta</p>.
                                <div className='display5'>
                                    <img src="assets/vectors.png" className='images3' /><p>2 Beds</p>
                                    <img src="assets/Group 4957.png" className='images3' /><p>2 Bath</p>
                                </div>
                                <div className='button1'>View Details</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )

}
