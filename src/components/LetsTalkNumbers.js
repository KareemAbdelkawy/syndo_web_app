import React from "react";
import { Card } from "antd";
import "./../../src/App.css";

const LetsTalkNumbers = () => {
  return (
    <div className="lets-talk-numbers">
      <h1 className="title">Let's talk numbers</h1>
      <div className="cards">
        <Card className="card" hoverable>
          <div className="card-content">
            <p className="card-text-top">100</p>
            <hr className="card-separator" />
            <p className="card-text-bottom">Rounds</p>
          </div>
        </Card>
        <Card className="card" hoverable>
          <div className="card-content">
            <p className="card-text-top">EGP 200K</p>
            <hr className="card-separator" />
            <p className="card-text-bottom">Total Raised</p>
          </div>
        </Card>
        <Card className="card" hoverable>
          <div className="card-content">
            <p className="card-text-top">EGP 50K+</p>
            <hr className="card-separator" />
            <p className="card-text-bottom">Total Raised</p>
          </div>
        </Card>
        <Card className="card" hoverable>
          <div className="card-content">
            <p className="card-text-top">30+</p>
            <hr className="card-separator" />
            <p className="card-text-bottom">Startups</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LetsTalkNumbers;
