import React from "react";
import { useParams } from "react-router-dom";
import { CardData } from "../components/common/Helper";
import Nav from "../components/Nav";

const BrandPage = () => {
  const { id } = useParams();
  const newData = CardData.find((post) => post.id === id);
  if (!newData) {
    return (
      <p className="bg-red-500 h-screen justify-center items-center text-4xl">
        {" "}
        Page Not Found
      </p>
    );
  }

  return (
    <>
    <div className="h-screen flex flex-col">
      <Nav/>
        <div className="h-full grow bg-red-400 flex justify-center  items-center text-white font-medium text-xl">
          <div className="flex flex-wrap">
            <div className={`p-4 rounded ${newData.card_bg}`}>
              <h2>{newData.heading}</h2>
              <p>{newData.para}</p>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default BrandPage;
