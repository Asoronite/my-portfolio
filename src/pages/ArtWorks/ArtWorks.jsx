import React from 'react'
import ArtWorksStyle from "./ArtWorks.module.css";

const ArtWorks = () => {
  return (
    <div className="ArtWorksStyle.insta">
      <iframe
        className={ArtWorksStyle.insta}
        src="https://instagram.com/the.art.instinct?igshid=ZDdkNTZiNTM="
      />
    </div>
  );
}

export default ArtWorks