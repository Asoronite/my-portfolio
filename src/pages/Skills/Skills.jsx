import React from 'react'
import SkillsStyle from "./Skills.module.css";
import CatPhoto from "../../Documents/nrm_1418380554-cats-cinema-orange-wednesday.jpg";

const Skills = () => {
  return (
    <div className={SkillsStyle.body}>
      <a className={SkillsStyle.CatContainer} href="/Skills/MovieApp">
        <img src={CatPhoto} alt="cat photo" className={SkillsStyle.CatCinema} />
        <p className={SkillsStyle.Title}>Movie App</p>
      </a>
    </div>
  );
}

export default Skills



{/* <Nav.Link href="/Contact">Contact</Nav.Link> */}