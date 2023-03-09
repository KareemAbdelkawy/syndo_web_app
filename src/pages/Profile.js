import { Layout, Menu, Dropdown, Avatar, Button, Divider, Switch } from "antd";
import {
  HomeOutlined,
  BellOutlined,
  UserOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ApplicationFormModal from "../components/ApplicationFormModal";

const { Header, Content } = Layout;

const Profile = () => {
  const [phase, setPhase] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setPhase(1)
    setIsModalVisible(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  const notificationsMenu = (
    <Menu>
      <Menu.Item key="1">Notification 1</Menu.Item>
      <Menu.Item key="2">Notification 2</Menu.Item>
      <Menu.Item key="3">Notification 3</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{ height: 350, background: "black", paddingLeft: "120px" }}
      >
        <div className="header-toggle">
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 20,
          }}
        >
          <Dropdown overlay={notificationsMenu}>
            <BellOutlined
              style={{ fontSize: 24, paddingRight: 30, color: "white" }}
            />
          </Dropdown>

          <UserOutlined
            style={{ fontSize: 24, paddingRight: 30, color: "white" }}
          />
          <Link to="/" style={{ display: "inline-flex" }}>
            <HomeOutlined style={{ fontSize: 24, color: "white" }} />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 30,
            paddingTop: 40,
          }}
        >
          <Avatar
            src="https://example.com/profile-pic.png"
            size={120}
            style={{ backgroundColor: "white" }}
          />
          <div style={{ marginLeft: 30 }}>
            <div style={{ fontSize: 50, color: "white" }}>Trella</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ fontSize: 22, color: "white" }}>Live</div>
              <div
                style={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  width: 10,
                  height: 10,
                  marginLeft: 10,
                }}
              />
            </div>
          </div>
        </div>
      </Header>
      <Content style={{ backgroundColor: "black", paddingLeft: "120px" }}>
        <Button type="primary" style={{ width: 355, height: 60, fontSize: 30 }} onClick={handleOpenModal}>
          Apply
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: 100,
          }}
        >
          <FacebookOutlined
            style={{ fontSize: 24, paddingRight: 30, color: "white" }}
          />
          <InstagramOutlined
            style={{ fontSize: 24, paddingRight: 30, color: "white" }}
          />
          <LinkedinOutlined style={{ fontSize: 24, color: "white" }} />
        </div>
        <div
          style={{
            backgroundColor: "#00ACB1",
            color: "white",
            width: 125,
            height: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          SERIES-A
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 20,
          }}
        >
          <div style={{ paddingRight: 90 }}>
            <div style={{ fontSize: 16, color: "#00ACB1" }}>
              About the Company
            </div>
          </div>

          <div style={{}}>
            <div style={{ fontSize: 16, color: "#656F77", paddingLeft: 200 }}>
              Current Mood
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ACB8C2",
            height: 1,
            width: 960,
            marginTop: 20,
          }}
        >
          <div style={{ backgroundColor: "#00ACB1", height: 1, width: 460 }} />
        </div>{" "}
        <div style={{ fontSize: 16, color: "#ACB8C2", marginTop: 54 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 29,
          }}
        >
          <div style={{ marginRight: 300 }}>
            <div style={{ fontSize: 24, color: "white" }}>
              About the Company
            </div>
            <div style={{ fontSize: 16, color: "#ACB8C2", marginTop: 29 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              sem et elit faucibus lobortis vel ac sapien.
            </div>
            <div
              style={{
                backgroundColor: "#ACB8C2",
                height: 1,
                width: 960,
                marginTop: 65,
              }}
            />
          </div>
          <div></div>
        </div>
        <div style={{ fontSize: 24, color: "white", marginTop: 50 }}>
          Meet the Team
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 32,
          }}
        >
          <div style={{ marginRight: 108 }}>
            <Avatar
              src="https://example.com/profile-pic.png"
              size={120}
              style={{ backgroundColor: "white" }}
            />
            <div style={{ paddingLeft: "25px" }}>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                Person 1
              </div>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                CTO
              </div>
              <LinkedinOutlined
                style={{ fontSize: 24, color: "white", marginTop: 10 }}
              />
            </div>
          </div>
          <div style={{ marginRight: 108 }}>
            <Avatar
              src="https://example.com/profile-pic.png"
              size={120}
              style={{ backgroundColor: "white" }}
            />
            <div style={{ paddingLeft: "25px" }}>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                Person 2
              </div>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                COO
              </div>
              <LinkedinOutlined
                style={{ fontSize: 24, color: "white", marginTop: 10 }}
              />
            </div>
          </div>
          <div style={{ marginRight: 108 }}>
            <Avatar
              src="https://example.com/profile-pic.png"
              size={120}
              style={{ backgroundColor: "white" }}
            />
            <div style={{ paddingLeft: "25px" }}>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                Person 3
              </div>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                CFO
              </div>
              <LinkedinOutlined
                style={{ fontSize: 24, color: "white", marginTop: 10 }}
              />
            </div>
          </div>
          <div>
            <Avatar
              src="https://example.com/profile-pic.png"
              size={120}
              style={{ backgroundColor: "white" }}
            />
            <div style={{ paddingLeft: "25px" }}>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                Person 4
              </div>
              <div style={{ fontSize: 16, color: "white", marginTop: 10 }}>
                CTO
              </div>
              <LinkedinOutlined
                style={{ fontSize: 24, color: "white", marginTop: 10 }}
              />
            </div>
          </div>
        </div>
      </Content>
      <ApplicationFormModal visible={isModalVisible} onClose={handleCloseModal} phase={phase} setPhase={setPhase}/>    </Layout>
  );
};

export default Profile;
