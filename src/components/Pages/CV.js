import React from 'react'
import "antd/dist/antd.css";
import 'antd-css-utilities/utility.min.css'
import './cv.css';
import me from './images/square.png';
import { Col, Row } from 'antd';
import { Button } from 'antd';

function CV() {
  return (
    <div className="cv">
        <Row>
            <Col xs={{ span: 22, offset: 1 }} md={{ span: 18, offset: 3 }} lg={{ span: 16, offset: 4 }}>
                <div className="cv-main-container my-16">
                    <div className="cv-header text-center py-3">
                    <Row>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="d-flex flex-wrap justify-end align-center me-container">
                            <div className="me-img-box">
                                
                                <img id="cv-me" src={me} alt="picture of adrian rios"/>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                            <h1 className="mb-1">Adrian Philip Rios</h1>
                            <h4 className="subheader">Front-End Developer</h4>
                        </Col>
                    </Row>
                        <hr />
                    </div>
                    <div className="cv-header-angle"></div>
                    
                    <Row className="cv-info-row">
                        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="d-flex flex-wrap cv-left-column px-3">
                                <div className="cv-contact w-100">
                                    <h5>Contact</h5>
                                    <div className="text-center">
                                        <div>+639215280758</div>
                                        <div>adrianphiliprios@gmail.com</div>
                                    </div>
                                </div>
                                <div className="cv-tech-stack w-100 mt-1">
                                    <h4>Teck Stack</h4>
                                    <div className="">
                                        <ul>
                                            <li>HTML, CSS</li>
                                            <li>HTML, CSS</li>
                                            <li>MYSQL / POSTGRESQL / MONGODB</li>
                                            <li>PHP</li>
                                            <li>WORDPRESS</li>
                                            <li>CODEIGNITER</li>
                                            <li>LARAVEL</li>
                                            <li>JAVASCRIPT</li>
                                            <li>ANGULAR (TS)</li>
                                            <li>REACTJS</li>
                                            <li>NODEJS</li>
                                            <li>EXPRESSJS</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <h4>Education</h4>
                                    <div className="text-center">
                                        <div>+639215280758</div>
                                        <div>adrianphiliprios@gmail.com</div>
                                    </div>
                                </div>
                        </Col>
                        <Col xs={24} sm={24} md={15} lg={15} xl={15}>
                            <h1 className="mb-1">Adrian Philip Rios</h1>
                            <h4 className="subheader">Front-End Developer</h4>
                        </Col>
                    </Row>

                </div>
            </Col>
        </Row>
    </div>
  )
}

export default CV
