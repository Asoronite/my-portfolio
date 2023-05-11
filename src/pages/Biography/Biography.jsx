import BiographyStyle from "./Biography.module.css";
import React from "react";
import Pdf from "../../Documents/Lebenslauf_EnesKöse.pdf";

const Biography = () => {
  return (
    <div >
      <iframe className={BiographyStyle.file} src={Pdf} frameborder="0" />
    </div>
  );
};

export default Biography;
