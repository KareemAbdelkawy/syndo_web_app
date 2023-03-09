import React, { useState } from "react";
import { Switch, Layout, Button } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <Header className={`header ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-toggle" style={{ paddingRight: "50px" }}>
        <span
          style={{
            color: "white",
            paddingRight: 20,
            fontFamily: "Roboto",
            fontStyle: `normal`,
            fontWeight: 900,
          }}
        >
          Light mode
        </span>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          style={{ background: "#00ACB1" }}
        />
      </div>
      <div className="header-content" style={{ paddingRight: "50px" }}>
        <div className="logo-container" style={{ marginLeft: "50px" }}>
          <img className="logo" src="./syndo.png" alt="Logo" />
        </div>
        <div className="button-container">
          <Button
            className="login-button"
            style={{
              color: "white",
              width: 240,
              height: 60,
              backgroundColor: "black",
              border: "none",
              fontFamily: "Roboto",
              fontStyle: `normal`,
              fontWeight: 900,
            }}
          >
            Login
          </Button>
          <Button
            className="get-started-button"
            style={{
              backgroundColor: "#00ACB1",
              width: 240,
              height: 60,
              color: "white",
              border: "none",
              fontFamily: "Roboto",
              fontStyle: `normal`,
              fontWeight: 900,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
