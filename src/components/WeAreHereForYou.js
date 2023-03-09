import React from "react";
import { Button } from "antd";

const styles = {
  fontFamily: "Roboto",
  backgroundColor: "black",
  color: "white",
  height: "700px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: '50px'

};

const leftStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};

const WeAreHereForYou = () => {
  return (
    <div style={styles}>
      <div style={leftStyles}>
        <p style={{ fontSize: "20px", color: "#00ACB1" }}>WE'RE HERE FOR YOU</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: "50px",
              color: "white",
              width: "527px",
              height: "118px",
              fontFamily: "Roboto",
              fontStyle: `normal`,
              fontWeight: 900,
            }}
          >
            Your first step towards growth
          </p>
          <p
            style={{
              fontSize: "30px",
              color: "#656F77",
              width: "600px",
              height: "80px",
              fontFamily: "Roboto",
              fontStyle: `normal`,
              fontWeight: 900,
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <Button
          type="primary"
          style={{
            width: "300px",
            height: "60px",
            backgroundColor: "#00ACB1",
            marginTop: "48px",
            fontFamily: "Roboto",
            fontStyle: `normal`,
            fontWeight: 900,
          }}
        >
          Get started
        </Button>
      </div>
      <img
        src="./firstOne.png"
        alt="Here for you"
        style={{
          width: "1000px",
          height: "600px",
          paddingRight: "140px",
          fontFamily: "Roboto",
          fontStyle: `normal`,
          fontWeight: 900,
        }}
      />
    </div>
  );
};

export default WeAreHereForYou;
