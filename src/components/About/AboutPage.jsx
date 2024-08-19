import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import HTML from '../../assets/html-5.png';
import CSS from '../../assets/css-3.png';
import JS from '../../assets/js.png';
import jQuery from '../../assets/js-format.png';
import Bootstrap from '../../assets/bootstrap.png';
import ReactImg from '../../assets/physics.png';
import Right from '../../assets/right.png';
import Git from '../../assets/github.png';

function AboutPage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>
                                        <img height='20px' src={HTML}  alt='l'/><span>HTML5</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={CSS}  alt='l'/><span>CSS3</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={JS}  alt='l'/><span>Java Script</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={jQuery}  alt='l'/><span>Java Script</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={Bootstrap}  alt='l'/><span>Bootstrap 5</span>
                                    </li>
                                </Col>
                                <Col md={5}>
                                    <li>
                                        <img height='20px' src={ReactImg}  alt='l'/><span>React js</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={Git}  alt='l'/><span>Git/Github</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={Right}  alt='l'/><span>Redux js</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={Right}  alt='l'/><span>React-Bootstrap</span>
                                    </li>
                                    <li>
                                        <img height='20px' src={Right}  alt='l'/><span>Material-ui</span>
                                    </li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutPage