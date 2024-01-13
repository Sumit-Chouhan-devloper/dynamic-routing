import React from "react";
import { Link } from "react-router-dom";
const DataCards = ({ id, heading, para, card_bg, img }) => {
  return (
    <>
      <div className="w-6/12 p-2">
        <Link to={`/AboutPage/${id}`}>
          <div className={`p-2 rounded ${card_bg}`}>
            <img src={img} alt="img" />
            <h2>{heading}</h2>
            <p>{para}</p>
          </div>
        </Link>
      </div>
    </>
  );
};


export default DataCards;
