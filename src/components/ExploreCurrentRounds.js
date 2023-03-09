import React from "react";
import { Card } from "antd";
import "./../../src/App.css";
import { Link } from "react-router-dom";

const ExploreCurrentRounds = () => {
  return (
    <div className="explore-current-rounds">
      <h1 className="explore-current-rounds-title">Explore Current Rounds</h1>
      <div className="explore-current-rounds-cards">
        <Link to='/profile'>
        <Card
          style={{ backgroundColor: "black" }}
          hoverable
          cover={<img alt="round1" src="./second.png" />}
          className="explore-current-rounds-card"
        />
        </Link>
        <Link to='/profile'>
        <Card
          style={{ backgroundColor: "black" }}
          hoverable
          cover={<img alt="round2" src="./second.png" />}
          className="explore-current-rounds-card"
        />
                </Link>

         <Link to='/profile'>
        <Card
          style={{ backgroundColor: "black" }}
          hoverable
          cover={<img alt="round3" src="./second.png" />}
          className="explore-current-rounds-card"
        />
                </Link>

      </div>
    </div>
  );
};

export default ExploreCurrentRounds;