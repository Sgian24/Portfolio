import NavBar from "../Components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headShot from "..//Assets/headshot.jpeg";
import Carousel from "react-bootstrap/Carousel";
import screenshot1 from "..//Assets/nba-screenshot-1.jpg";
import screenshot2 from "..//Assets/nba-screen2.jpg";
import hor1 from "..//Assets/hor-screen-1.jpg";
import hor2 from "..//Assets/hor-screen-2.jpg";
import hor3 from "..//Assets/hor-screen-3.jpg";
import hor4 from "..//Assets/hor-screen-4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <NavBar />
        <Container className="hero-container bg-black" fluid>
            <Row className="h-100">
                <Col className="d-flex flex-column align-items-center justify-content-center pt-5 text-white">
                    <h5>Hi, my name is</h5>
                    <h1 className="name">SUNNY GIAN</h1>
                    <h5>Frontend Developer based in Toronto.</h5>
                </Col>
            </Row>
        </Container>
        <Container className="hero-container pt-5 pb-5 h-auto" fluid>
            <Row>
                <Col>
                    <h1 className="heading">ABOUT</h1>
                    <hr />
                    <p>My name is Sunny Gian. I am a frontend engineer with a UX design background. I have a passion for design but enjoy the more technical 
                        aspects which lead me to get into frontend development. I am currently looking for opportunities to 
                        further develop my abilities.</p>
                    <p><strong>Technical Skills:</strong></p> 
                    <ul>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>JavaScript</li>
                       <li>React</li>
                       <li>Bootstrap</li>
                       <li>Git</li>
                       <li>Figma</li>
                       <li>FL Studio (Audio Software)</li> 
                    </ul>
                </Col>
                <Col className="d-flex flex-column align-items-end justify-content-center">
                    <img className="headshot object-fit-cover" src={headShot} height="400"  width="400" alt="" />
                </Col>
            </Row>
        </Container>
        <Container className="hero-container pt-5 pb-5 bg-black h-auto" fluid>
            <Row>
                <Col className="text-white">
                    <h1 className="heading mb-4">PROJECTS</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="mb-5">
                <Col sm={12} xl={5} xxl={4} className="d-flex flex-column text-white">
                    <h4 className="mb-3">• NBA Fantasy Visualizer</h4>
                    <p>A web app I developed to visualize NBA player stats with graphs. Users can create an account to draft and save their own roster. Data 
                    is fetched from 3 different apis. 
                    </p>
                    <p><strong>Frontend Development Tools Used:</strong></p> 
                    <ul>
                       <li>React</li>
                       <li>Various APIs from RapidAPI</li>
                       <li>Axios</li>
                       <li>Firebase Authentication and Firestore</li>
                       <li>Bootstrap</li>
                       <li>React Router</li>
                       <li>Recharts</li>
                    </ul>
                    <div className="pb-2 d-flex h-100 align-items-end">
                        <a className="btn btn-light me-3" target="_blank" href="https://sgian24.github.io/FantasyNBABasketball/">VIEW PROJECT</a>
                        <a className="text-white pb-2" href="https://github.com/Sgian24/FantasyNBABasketball/" target="_blank">Github Repository</a>
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-center pt-4 " sm={0} xl={7} xxl={8}>
                    <Carousel className="carousel overflow-hidden" data-bs-theme="dark">
                        <Carousel.Item >
                            <img className="carousel" src={screenshot1} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={screenshot2} width="100%" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col sm={12} xl={5} xxl={4} className="d-flex flex-column text-white">
                    <h4 className="mb-3">• Haus of Rogue Portfolio</h4>
                    <p>Responsive portfolio website I developed for graphic designer and artist Billie Rogue.</p>
                    <p><strong>Frontend Development Tools Used:</strong></p> 
                    <ul className="hor-portfolio-list">
                       <li>React</li>
                       <li>Bootstrap</li>
                       <li>React Router</li>
                    </ul>
                    <div className="pb-2 d-flex h-100 align-items-end">
                        <a className="btn btn-light me-3" target="_blank" href="https://hausofrogue.com/">VIEW SITE</a>
                        <a className="text-white pb-2" href="https://github.com/Sgian24/HausofRoguePortfolio/" target="_blank">Github Repository</a>
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-center pt-5 " sm={0} xl={7} xxl={8}>
                    <Carousel className="carousel overflow-hidden" data-bs-theme="dark">
                        <Carousel.Item >
                            <img className="carousel" src={hor1} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={hor3} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={hor4} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={hor2} width="100%" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        <Container className="hero-container pt-5 pb-5 h-auto" fluid>
            <Row>
                <Col>
                    <h1 className="text-center heading">GET IN TOUCH</h1>
                    <hr />
                    <div className="d-flex justify-content-center mb-3">
                        <Link className="btn btn-outline-dark me-3" to="mailto:sgian08@gmail.com" style={{width:"110px"}}><i className="bi bi-envelope me-2"></i>Email</Link>
                        <a className="btn btn-outline-dark me-3" style={{width:"110px"}} target="_blank" href="https://github.com/Sgian24"><i className="bi bi-github me-2"></i>GITHUB</a>
                    </div>
                    <p className="text-center" style={{opacity:"50%"}}>Site designed and developed by Sunny Gian.</p>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Home;