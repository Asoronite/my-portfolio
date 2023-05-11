import FooterStyle from "./Footer.module.css";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div className={FooterStyle.position}>
      <footer className=" py-3 FooterStyle.position">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start">
              <p>© 2023 Enes Köse</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <a
                href="https://www.linkedin.com/in/enes-k%C3%B6se-1a5835257/"
                className="me-4 text-reset"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a
                href="https://github.com/Asoronite"
                className="me-4 text-reset"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a
                href="https://instagram.com/the.art.instinct?igshid=ZDdkNTZiNTM="
                className="me-4 text-reset"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
              <a
                href="mailto:enes.koese.de@gmail.com"
                className="me-4 text-reset"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </a>
              <a
                href="https://www.youtube.com/@asoronite/videos"
                className="me-4 text-reset"
                target="_blank"
              >
                <FontAwesomeIcon icon={faYoutube} size="xl" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
export default Footer

{/* <FontAwesomeIcon icon="fa-brands fa-github" size="lg" /> */}