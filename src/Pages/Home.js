import { useState, useEffect, useRef } from "react";
import NET from 'vanta/dist/vanta.net.min';
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
import techno1 from "..//Assets/Techno-1.jpg";
import techno2 from "..//Assets/Techno-2.jpg";
import techno3 from "..//Assets/Techno-3.jpg";
import techno4 from "..//Assets/Techno-4.jpg";

const Home = () => {

    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x0,
                maxDistance: 22.00,
                showDots: false
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
   
    useEffect(() => {
        const observer = new IntersectionObserver(i => {
            if (i[0].isIntersecting) {
                aboutRef.current.style.opacity = "1";
        }});
        const observerTwo = new IntersectionObserver(i => {
            if (i[0].isIntersecting) {
                document.getElementsByClassName("fade-in-row")[0].style.opacity = "1";
                document.getElementsByClassName("fade-in-row")[1].style.opacity = "1";
                document.getElementsByClassName("fade-in-row")[2].style.opacity = "1"
                document.getElementsByClassName("fade-in-row")[3].style.opacity = "1";
        }});
        const observerThree = new IntersectionObserver(i => {
            if (i[0].isIntersecting) {
                contactRef.current.style.opacity = "1"
        }});
        if (aboutRef.current && projectRef.current && contactRef.current) {
            observer.observe(aboutRef.current)
            observerTwo.observe(projectRef.current)
            observerThree.observe(contactRef.current)
        }
        return () => { 
            if (aboutRef.current && projectRef.current && contactRef.current) {
                observer.unobserve(aboutRef.current)
                observerTwo.unobserve(projectRef.current)
                observerThree.unobserve(contactRef.current)
            }
        }
    },[aboutRef])

    return (
        <>
        <NavBar />
        <Container ref={vantaRef} className="hero-container bg-black" fluid>
            <Row className="h-100">
                <Col className="d-flex flex-column align-items-center justify-content-center pt-5 text-white">
                    <h5>Hi, my name is</h5>
                    <h1 className="name">SUNNY GIAN</h1>
                    <h5>Front-End Developer based in Toronto.</h5>
                </Col>
            </Row>
        </Container>
        <Container id="about" className="about-container pt-5 pb-5 h-auto" ref={aboutRef} fluid>
            <Row>
                <Col className="mb-4 mb-md-4 mb-lg-0 mb-xl-0" md={12} lg={6} xl={6}>
                    <h1 className="heading">ABOUT</h1>
                    <hr />
                    <p>My name is Sunny Gian. I am a front-end engineer with a UX design background. I have a passion for design but enjoy the more technical 
                        aspects which lead me to get into front-end development. I am currently looking for opportunities to 
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
                <Col className="d-flex flex-column align-items-center align-items-sm-center align-items-xl-end align-items-xxl-end justify-content-center">
                    <img className="headshot object-fit-cover" src={headShot} height="400"  width="400" alt="" />
                </Col>
            </Row>
        </Container>
        <Container className="project-container pt-5 pb-5 bg-black h-auto" ref={projectRef} fluid>
            <Row className="fade-in-row">
                <Col className="text-white">
                    <h1 id="projects" className="heading mb-4">PROJECTS</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="fade-in-row mb-5">
                <Col sm={12} xl={5} xxl={4} className="d-flex flex-column text-white">
                    <h4 className="mb-3">• NBA Fantasy Visualizer</h4>
                    <p>A web app I developed to present NBA player statistics in graphical form. Users can sign in to create and save their own roster. Data 
                    is fetched from the "tank01-fantasy-stats" API (RapidAPI). 
                    </p>
                    <p><strong>Front-End Development Tools Used:</strong></p> 
                    <ul>
                       <li>React</li>
                       <li>Axios</li>
                       <li>Firebase Authentication and Firestore</li>
                       <li>Bootstrap</li>
                       <li>React Router</li>
                       <li>Recharts</li>
                       <li>Formik and Yup Form Validation</li>
                    </ul>
                    <div className="pb-2 d-flex h-100 align-items-end">
                        <a className="btn btn-light me-3" target="_blank" href="https://sgian24.github.io/FantasyNBABasketball/">VIEW PROJECT</a>
                        <a className="github-link text-white pb-2" href="https://github.com/Sgian24/FantasyNBABasketball/" target="_blank">Github Repository</a>
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
            <Row className="fade-in-row mb-5">
                <Col sm={12} xl={5} xxl={4} className="d-flex flex-column text-white">
                    <h4 className="mb-3">• Haus of Rogue Portfolio</h4>
                    <p>Responsive portfolio website I developed for graphic designer and artist Billie Rogue.</p>
                    <p><strong>Front-End Development Tools Used:</strong></p> 
                    <ul className="hor-portfolio-list">
                       <li>React</li>
                       <li>Bootstrap</li>
                       <li>React Router</li>
                    </ul>
                    <div className="pb-2 d-flex h-100 align-items-end">
                        <a className="btn btn-light me-3" target="_blank" href="https://hausofrogue.com/">VIEW SITE</a>
                        <a className="github-link text-white pb-2" href="https://github.com/Sgian24/HausofRoguePortfolio/" target="_blank">Github Repository</a>
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-center pt-4 pt-lg-4 pt-xl-5 pt-xxl-5 " sm={0} xl={7} xxl={8}>
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
            <Row className="fade-in-row">
                <Col sm={12} xl={5} xxl={4} className="d-flex flex-column text-white">
                    <h4 className="mb-3">• Toronto Techno Events</h4>
                    <p>Web app I developed to browse upcoming techno events in Toronto. Users can 
                       filter through events based on venues and/or dates. Google Maps integration
                       also lets users browse events by location. Resource is fetched from a Firebase Firestore database
                       that stores data curled from the "Real-Time Events Search" API.</p>
                    <p><strong>Front-End Development Tools Used:</strong></p> 
                    <ul className="hor-portfolio-list">
                       <li>React</li>
                       <li>Bootstrap</li>
                       <li>React Router</li>
                       <li>Google Maps API</li>
                       <li>Firebase Firestore</li>
                       <li>React Datepicker</li>
                    </ul>
                    <div className="pb-2 d-flex h-100 align-items-end">
                        <a className="btn btn-light me-3" target="_blank" href="https://sgian24.github.io/TorontoTechnoEvents/">VIEW PROJECT</a>
                        <a className="github-link text-white pb-2" href="https://github.com/Sgian24/TorontoTechnoEvents/" target="_blank">Github Repository</a>
                    </div>
                </Col>
                <Col className="d-flex flex-column justify-content-top mt-5" sm={0} xl={7} xxl={8}>
                    <Carousel className="carousel overflow-hidden" data-bs-theme="dark">
                        <Carousel.Item >
                            <img className="carousel" src={techno1} height="100%" width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={techno2} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={techno3} width="100%" alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="carousel" src={techno4} width="100%" alt="" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            
        </Container>
        <Container className="contact-container pt-5 pb-5 h-auto" ref={contactRef} fluid>
            <Row>
                <Col>
                    <h1 id="contact" className="text-center heading">GET IN TOUCH</h1>
                    <hr />
                    <div className="d-flex justify-content-center mb-3">
                        <Link className="btn btn-outline-dark me-3" to="mailto:sgian08@gmail.com" style={{width:"110px"}}><i className="bi bi-envelope me-2"></i>EMAIL</Link>
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