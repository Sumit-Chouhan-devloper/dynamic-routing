import React from "react";
import { Link } from "react-router-dom";
const DataCards = ({ id, heading, para, card_bg }) => {
  return (
    <>
      <div className="w-6/12 p-2">
        <Link to={`/AboutPage/${id}`}>
          <div className={`p-4 rounded ${card_bg}`}>
            <h2>{heading}</h2>
            <p>{para}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DataCards;
