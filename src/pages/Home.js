import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Layout, Divider } from "antd";
import WeAreHereForYou from "../components/WeAreHereForYou";
import ExploreCurrentRounds from "../components/ExploreCurrentRounds";
import FooterComponent from "../components/FooterComponent";
import LetsTalkNumbers from "../components/LetsTalkNumbers";
import HearItfromOurDoers from "../components/HearItfromOurDoers";
const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <HeaderComponent/>
      <Content style={{ backgroundColor: "black", minHeight: "100vh" }}>
        <Divider />
        <div style={{ marginTop: "150px" }}>
          <WeAreHereForYou />
        </div>
        <Divider />
        <div style={{ marginTop: "150px" }}>
          <ExploreCurrentRounds />
        </div>
        <Divider />
        <div style={{ marginTop: "150px" }}>
          <LetsTalkNumbers></LetsTalkNumbers>
        </div>
        <div style={{ marginTop: "150px" }}>
          <HearItfromOurDoers></HearItfromOurDoers>
        </div>
        <Divider />
        <FooterComponent />
      </Content>
    </Layout>
  );
}
