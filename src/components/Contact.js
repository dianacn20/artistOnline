import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import './Contact.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [showImage, setShowImage] = useState(false);
  const [errors, setErrors] = useState({});
  
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }
  
  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;
    const errors = {};
  
    if (!firstName) {
      errors.firstName = '*Vă rugăm să introduceți prenumele dvs.';
    } else if (!/^[A-Z][a-z]*$/.test(firstName)) {
      errors.firstName = '*Prenumele trebuie să înceapă cu majusculă.';
    }
  
    if (!lastName) {
      errors.lastName = '*Vă rugăm să introduceți numele dvs. de familie.';
    } else if (!/^[A-Z][a-z]*$/.test(lastName)) {
      errors.lastName = '*Numele de familie trebuie să înceapă cu majusculă.';
    }
  
    if (!email) {
      errors.email = '*Vă rugăm să introduceți e-mailul dvs.';
    } else if (!/^\S+@\S+\.(?:com|net|org|edu|gov|mil|biz|info|[a-z]{2,})$/i.test(email)) {
      errors.email = '*Vă rugăm să introduceți o adresă de e-mail validă.';
    }
  
    if (!phone) {
      errors.phone = '*Vă rugăm să introduceți numărul dvs. de telefon.';
    } else if (!/^(00|\+373)\d{9}$/.test(phone)) {
      errors.phone = '*Vă rugăm să introduceți un număr de telefon valid care să înceapă cu +373 sau 00.';
    }
  
    if (!message) {
      errors.message = '*Vă rugăm să introduceți mesajul dvs.';
    }
  
    setErrors(errors);
  
    return Object.keys(errors).length === 0;
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
  
    setButtonText("Sending...");
  
    try {
      // Simulăm o pauză de 1.5 secunde pentru a afișa mesajul "Sending..."
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Update the state to show the image
      setShowImage(true);

      // Simulate a 1.5-second delay before redirecting to the thank-you page
      await new Promise((resolve) => setTimeout(resolve, 55000));
      setShowImage(false);

      setFormDetails(formInitialDetails);
      setButtonText("Send");
    } catch (error) {
      console.error(error);
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
          {showImage ? (
              <div className="thank-you">
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (<TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Ia legătura cu noi</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Numele" onChange={(e) =>onFormUpdate('firstName', e.target.value)} className={errors.firstName ? 'error' : ''}/>
                        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Prenumele" onChange={(e) => onFormUpdate('lastName', e.target.value)} className={errors.lastName ? 'error' : ''}/>
                        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} className={errors.email ? 'error' : ''}/>
                        {errors.email && <div className="error-message">{errors.email}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Număr de telefon" onChange={(e) => onFormUpdate('phone', e.target.value)} className={errors.phone ? 'error' : ''}/>
                        {errors.phone && <div className="error-message">{errors.phone}</div>}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Comentariu" onChange={(e) => onFormUpdate('message', e.target.value)} className={errors.message ? 'error' : ''}></textarea>
                        {errors.message && <div className="error-message">{errors.message}</div>}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

