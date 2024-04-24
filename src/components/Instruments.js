
import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/instruments.jpg";

export const Instruments = () => {
 
    return (
    <section className="instruments">
        <Container>
        <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={6}>
                <div>
                    <ul>
                        <li><b>Hârtie pentru acuarelă</b> (A3-A4, 300 g/m2, granulație medie)</li>
                        <li><b>Hârtie pentru markere sau caiet de schițe</b>(instructorul recomandă Bristol de Daler Rowney 250 g/m2, The Wall de Canson 220 g/m2 pe ambele fețe și Color Copy mat de Mondi)</li>
                        <li><b>Acuarele</b>(set pentru elevi sau pentru profesioniști)</li>
                        <li><b>Tempera albă</b></li>
                        <li><b>Pensule</b>: veveriță rotundă medie (5-6 buc.), veveriță subțire (2-3 buc.), flaut sintetic de 4-5 cm (opțional)</li>
                        <li><b>Markere cu alcool</b></li>
                        <li><b>Creion negru pentru pensulație</b>(opțional)</li>
                        <li><b>Pix cu gel alb</b></li>
                        <li><b>Creion alb</b></li>
                        <li><b>Gumă de șters sau radieră</b></li>
                        <li><b>Paletă</b></li>
                    </ul>
                </div>
            </Col>
            <Col xs={12} md={6} xl={6}>
                <img src={headerImg} alt="Imagine mare" />
            </Col>
        </Row>
        </Container>
    </section>
    )
}
