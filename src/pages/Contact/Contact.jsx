import React from 'react'
import ContactStyle from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className={ContactStyle.body}>
      <div className={ContactStyle.content}>
        <p className={ContactStyle.text}>
          You can find me on internet under the name <b>"Enes Köse"</b> or just
          as <b>"Asoronite"</b>.
        </p>
        <div className={ContactStyle.links}>
          <div>
            <a  className={ContactStyle.tel}>
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </a>
          </div>
          <div>
            <a>
              <p>+49 176 217 27 489</p>
            </a>
          </div>
        </div>
        <div className={ContactStyle.links}>
          <div>
            <a
              href="https://www.linkedin.com/in/enes-k%C3%B6se-1a5835257/"
              className="me-4 text-reset"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/enes-k%C3%B6se-1a5835257/"
              className="me-4 text-reset"
              target="_blank"
            >
              <p>https://www.linkedin.com/in/enes-k%C3%B6se-1a5835257/</p>
            </a>
          </div>
        </div>
        <div className={ContactStyle.links}>
          <div>
            <a
              href="https://github.com/Asoronite"
              className="me-4 text-reset"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Asoronite"
              className="me-4 text-reset"
              target="_blank"
            >
              <p>https://github.com/Asoronite</p>
            </a>
          </div>
        </div>
        <div className={ContactStyle.links}>
          <div>
            <a
              href="https://instagram.com/the.art.instinct?igshid=ZDdkNTZiNTM="
              className="me-4 text-reset"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com/the.art.instinct?igshid=ZDdkNTZiNTM="
              className="me-4 text-reset"
              target="_blank"
            >
              <p>https://instagram.com/the.art.instinct?igshid=ZDdkNTZiNTM=</p>
            </a>
          </div>
        </div>
        <div className={ContactStyle.links}>
          <div>
            <a
              href="mailto:enes.koese.de@gmail.com"
              className="me-4 text-reset"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </a>
          </div>
          <div>
            <a
              href="mailto:enes.koese.de@gmail.com"
              className="me-4 text-reset"
              target="_blank"
            >
              <p>enes.koese.de@gmail.com</p>
            </a>
          </div>
        </div>
        <div className={ContactStyle.links}>
          <div>
            <a
              href="https://www.youtube.com/@asoronite/videos"
              className="me-4 text-reset"
              target="_blank"
            >
              <FontAwesomeIcon icon={faYoutube} size="xl" />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/@asoronite/videos"
              className="me-4 text-reset"
              target="_blank"
            >
              <p>https://www.youtube.com/@asoronite/videos</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact