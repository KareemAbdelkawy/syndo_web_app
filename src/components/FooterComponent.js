import React from "react";
import { Layout, Row, Col } from "antd";
import { useState } from "react";

const { Footer } = Layout;

const FooterComponent = () => {
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Footer
      style={{ backgroundColor: "black", color: "white", marginTop: "150px" }}
    >
      <Row>
        <Col span={12}>
          <img src="./syndo.png" alt="Logo" style={{ width: "200px" }} />
          <p style={{ fontSize: "20px", color: "white" }}>
            created by angels for angels
          </p>
          <p style={{ fontSize: "16px", color: "white" }}>
            <a href="#">Privacy Policy</a>
            <span style={{ paddingLeft: "20px" }}>
              <a href="#">Legal Terms</a>
            </span>
          </p>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={6}>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  color: "white",
                  padding: 0,
                  margin: 0,
                }}
              >
                Home
              </button>

              <p style={{ fontSize: "16px", color: "white" }}>For Investors</p>
              <p style={{ fontSize: "16px", color: "white" }}>For Companies</p>
            </Col>
            <Col span={6}>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  color: "white",
                  padding: 0,
                  margin: 0,
                }}
              >
                About Us
              </button>
              <p style={{ fontSize: "16px", color: "white" }}>About Us</p>
              <p style={{ fontSize: "16px", color: "white" }}>Risk</p>
            </Col>
            <Col span={6}>
              <button
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  color: "white",
                  padding: 0,
                  margin: 0,
                }}
              >
                Resources
              </button>
              <p style={{ fontSize: "16px", color: "white" }}>FAQs</p>
              <p style={{ fontSize: "16px", color: "white" }}>Contact Us</p>
            </Col>
            <Col span={6}>
              <select
                style={{
                  fontSize: "20px",
                  color: "white",
                  backgroundColor: "black",
                  border: "none",
                  appearance: "none",
                  cursor: "pointer",
                }}
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="EN">EN</option>
                <option value="FR">FR</option>
                <option value="ES">ES</option>
                <option value="DE">DE</option>
              </select>
            </Col>
          </Row>
          <Row></Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p style={{ fontSize: "16px", color: "white", marginTop: "63px" }}>
            The Syndo credit & risk grading system is not a measure of the
            quality of the investment and is not meant to replace individual due
            diligence. Syndo’s credit & risk grading system is a feasibility
            study on the company and should not be considered a guarantee or a
            promise on future performance. Historical data is used to assess the
            possibility of default and not eliminate risk. Ratings are for
            informational purposes only. Ratings are not individualized for any
            specific investor’s financial situation and should not be considered
            investment advice. Each investor should carefully consider
            investments in any loan with his/her understanding of the
            investment.
          </p>
          <p style={{ fontSize: "14px", color: "white" }}>
            © 2022 syndo. All rights reserved
          </p>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
