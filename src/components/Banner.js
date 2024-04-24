import './Banner.css';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "cu markere.", "cu acuarelă." ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const scrollToConnectSection = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={`text-container ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                <span className="tagline">Online-curs</span>
                <h1>{`Schițarea `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "cu markere.", "cu acuarelă." ]'><span className="wrap">{text}</span></span></h1>
                  <p>Un curs despre elementele de bază ale schiței de la Artist Online și Diana Ciochina. Schițe botanice, de obiecte, arhitecturale și alimentare: de la noțiuni de bază de lucru cu materiale până la crearea unor planșe cu drepturi depline!</p>
                  <button onClick={scrollToConnectSection}><span>Înregistrează-te <ArrowRightCircle size={25} /><span /></span></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col className="align-items-right" xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`image-container ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                <img src={headerImg} alt="Header Img"/>
              </div>}              
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
