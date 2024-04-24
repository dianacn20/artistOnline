import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import img from "../assets/img/thanku.jpg";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
      setSubmitted(true);
    }
  };

  const clearFields = () => {
    setEmail("");
    setSubmitted(false);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={6}>
            <h3>
              Abonează-te la newsletter-ul nostru<br /> & Nu ratați niciodată ultimele actualizări
            </h3>
            {submitted && (
              <button className="reincarca" onClick={clearFields}>Reîncearcă</button>
            )}
          </Col>
          <Col lg={6}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                  />
                  <button type="submit">Transmite</button>
                </div>
              </form>
            ) : (
              <img
                src={img}
                alt="Imagine"
                style={{ width: "300px", height: "auto", margin: "0 auto", display: "block" }}
              />
            )}
          </Col>
        </Row>
      </div>
    </Col>
  );
};
