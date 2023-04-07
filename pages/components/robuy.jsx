import React from "react";
import Header from "./header";
import TopCard from "./topCard";
import Tags from "./tags";

const Robuy = () => {
  return (
    <>
      <Header />
      <div className="top-card-Container">
        <div className="top-card-child">
          <TopCard />
          <Tags />
        </div>
      </div>
    </>
  );
};

export default Robuy;
