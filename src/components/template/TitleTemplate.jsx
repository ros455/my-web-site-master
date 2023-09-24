import React from "react";
import "../../style/title.scss";
const TitleTemplate = ({ text }) => {
  return (
    <div className="title_tempalte_wrap">
      <div className="title_block">
        <h3 className="title_tempalte_text">{text}</h3>
      </div>
    </div>
  );
};

export default TitleTemplate;
