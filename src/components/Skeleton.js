import React, { useState } from "react";
import { Layout, Menu, Typography, Card } from "antd";
import {
  HomeOutlined,
  DownOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../css/Skeleton.css";
import Graph from "./Graph";
import Statistics from "./Statistics";
import Announcement from "./Announcement";
import Visitors from "./Visitors";
import Courses from "./Courses";
import Recent from "./Recent";
import Recentemployee from "./Recentemployee";
import Searchbar from "./Searchbar";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

const Skeleton = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed);
          }}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<HomeOutlined style={{ fontSize: "1.2rem" }} />}
              style={{
                borderLeft: "0.2rem solid #6A5DFF",
                fontWeight: "bold",
              }}
              className=".ant-menu-inline .ant-menu-item::after"
            >
              Home
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<BookOutlined style={{ fontSize: "1.2rem" }} />}
              title="My learning"
              style={{ fontWeight: "bold" }}
            >
              <Menu.Item
                key="2"
                icon={<img style={{ height: "0.5rem" }} src="./dot.svg" />}
                style={{ fontWeight: "normal" }}
              >
                Course
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<img style={{ height: "0.5rem" }} src="./dot.svg" />}
                style={{ fontWeight: "normal" }}
              >
                Specialization
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="4"
              icon={<img src="./medal.svg" />}
              style={{ fontWeight: "bold" }}
            >
              Learning path
            </Menu.Item>
            <Menu.Item
              key="5"
              icon={<img src="./leaderboard.svg" />}
              style={{ fontWeight: "bold" }}
            >
              Performance
            </Menu.Item>
            <Menu.Item
              key="6"
              icon={<ShoppingCartOutlined style={{ fontSize: "1.2rem" }} />}
              style={{ fontWeight: "bold" }}
            >
              Cart
            </Menu.Item>
            <Menu.Item
              key="7"
              icon={<SettingOutlined style={{ fontSize: "1.2rem" }} />}
              style={{ fontWeight: "bold" }}
            >
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="ant-layout site-layout">
          <Content style={{ margin: "1.5rem 2.63rem" }}>
            <Title level={2}>Performance</Title>
            <div style={{ display: "flex", width: "100%" }}>
              <Card
                className="welcomecard ant-card-body"
                style={{ paddingLeft: "1rem" }}
              >
                <div className="welcome">
                  <div>
                    <h2
                      style={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      Hello Jane!
                    </h2>
                    <h1 style={{ fontWeight: "lighter", fontSize: "0.7rem" }}>
                      It's good to see you again
                    </h1>
                  </div>
                  <img src="./shapes.svg" />
                </div>
              </Card>
              <Card
                style={{
                  width: "20%",
                  padding: "1rem 0.5rem 1rem 1.5rem",
                  backgroundColor: "#323232",
                  backgroundImage: "url(./dwnldreport.svg)",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                }}
              >
                <div className="downloadbtn">
                  <div>
                    <h1 style={{ color: "white", margin: "0" }}>
                      Download Report
                    </h1>
                    <div className="week">
                      <h5 className="last">Last Week</h5>
                      <DownOutlined
                        style={{ fontSize: "0.5rem", color: "#71717A" }}
                      />
                    </div>
                  </div>
                  <div>
                    <img src="./download.svg" />
                  </div>
                </div>
              </Card>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Searchbar />
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "1rem",
                gap: "2rem",
              }}
            >
              <Graph />
              <Statistics />
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "1rem",
                gap: "2rem",
              }}
            >
              <Announcement />
              <Visitors />
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "1rem",
                gap: "2rem",
              }}
            >
              <Courses show={true} showEmp={false} title={"Course in demand"} />
              <Courses show={false} showEmp={false} title={"Recent Activity"} />
              <Courses show={false} showEmp={true} title={"Recent Activity"} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Skeleton;
