import React from 'react'
import LandingPageStyle from "./LandingPage.module.css";
import Portrait from "../../Documents/WhatsApp Image 2023-04-14 at 04.55.29.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBootstrap, faCss3Alt, faGit, faHtml5, faPython, faReact, faSquareJs} from "@fortawesome/free-brands-svg-icons";



const LandingPage = () => {
  return (
    <div>
      <div className={LandingPageStyle.NamePortrait}>
        <div className={LandingPageStyle.NameContainer}>
          <p className={LandingPageStyle.Hello}>Hello!</p>
          <p className={LandingPageStyle.Me}>it's me,</p>
          <p className={LandingPageStyle.Koese}>Enes Köse</p>
        </div>
        <img
          src={Portrait}
          alt="Portrait"
          className={LandingPageStyle.Portrait}
        />
      </div>
      <div className={LandingPageStyle.SkillIcons}>
        <FontAwesomeIcon
          icon={faHtml5}
          className={LandingPageStyle.SkillIcon}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          className={LandingPageStyle.SkillIcon}
        />
        <FontAwesomeIcon
          icon={faSquareJs}
          className={LandingPageStyle.SkillIcon}
        />
        <FontAwesomeIcon
          icon={faReact}
          className={LandingPageStyle.SkillIcon}
        />
        <FontAwesomeIcon icon={faGit} className={LandingPageStyle.SkillIcon} />
        <FontAwesomeIcon
          icon={faPython}
          className={LandingPageStyle.SkillIcon}
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          className={LandingPageStyle.SkillIcon}
        />
      </div>
    </div>
  );
}

export default LandingPage