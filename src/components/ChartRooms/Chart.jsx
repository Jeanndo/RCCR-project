import React from "react";
import { Layout} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons"
import Navigation from "../Navigation/Navigation";
import SideMenu from "./SIdeMenu";
import Marquee from "react-fast-marquee";
import ChartBody from "./ChartBody";

const { Header,Content } = Layout;

const Chart = () => {
  const [state, setState] = React.useState({ collapsed: false });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
      <div>
    <Navigation/>
    <Layout style={{marginBottom:'30px'}}>
     <SideMenu state={state}/>
      <Layout className="site-layout">
        <Header className="chart-header" style={{ padding: 0 }}>
          {React.createElement(
            state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
          <Marquee style={{marginTop:'-80px',float:'right'}}>
            <h2>Chart within any community</h2>
            </Marquee>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <ChartBody/>
        </Content>
      </Layout>
    </Layout>
    {/* <Footer/> */}
    </div>
  );
};

export default Chart;
