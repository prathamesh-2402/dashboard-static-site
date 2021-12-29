import React, { useState } from "react";
import { Layout, Menu, Typography, Card, Switch } from "antd";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../css/Statistics.css";

const data = [
  {
    name: "Sun",
    uv: 0,
  },
  {
    name: "Mon",
    uv: 3,
  },
  {
    name: "Tue",
    uv: 2,
  },
  {
    name: "Wed",
    uv: 5,
  },
  {
    name: "Thu",
    uv: 6,
  },
  {
    name: "Fri",
    uv: 1,
  },
  {
    name: "Sat",
    uv: 8,
  },
];

const arr = [
  {
    icon: "./globe.svg",
    title: 279,
    arrow: false,
    variation: "-27.9%",
    status: "Active user",
  },
  {
    icon: "./chart.svg",
    title: '20%',
    arrow: true,
    variation: "-17.9%",
    status: "Attendance",
  },
  {
    icon: "./notepad.svg",
    title: 279,
    arrow: true,
    variation: "-27.9%",
    status: "Total question resolved",
  },
  {
    icon: "./group.svg",
    title: 279,
    arrow: false,
    variation: "-27.9%",
    status: "Total enrolled",
  },
  {
    icon: "./question.svg",
    title: 279,
    arrow: false,
    variation: "-27.9%",
    status: "Total question resolved",
  },
  {
    icon: "./clock.svg",
    title: 'time',
    arrow: false,
    variation: "27",
    status: "Total hour spent",
  },
];


const Over = ({ title, icon, arrow, variation, status })=>{
  return(
    <div style={{ display: "flex", width: "30%"}}>
      <img style={{ marginRight: "2rem" }} src={icon} />
      <div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {title !== "time" ? (
            <>
              <h2 style={{ margin: "0",fontWeight:"bold" }}>{title}</h2>
              {arrow ? (
                <>
                  <img
                    src="/greenarrow.svg"
                    style={{ marginBottom: "0.3rem" }}
                  />
                  <h1 style={{ color: "green", margin: "0" }}>{variation}</h1>
                </>
              ) : (
                <>
                  
                  <img src="/redarrow.svg" />
                  <h1 style={{ color: "red", margin: "0" }}>{variation}</h1>
                </>
              )}
            </>
          ) : (
            <div style={{ display: "flex",alignItems:"baseline" }}>
              <h2 style={{margin:"0",fontWeight:"bold"}}>40</h2>
              <p style={{margin:"0"}}>hr</p>
              <h2 style={{margin:"0",fontWeight:"bold"}}>: 22</h2>
              <p  style={{margin:"0"}}>min</p>
              <h2 style={{margin:"0",fontWeight:"bold"}}>: 00</h2>
              <p  style={{margin:"0"}}>sec</p>
            </div>
          )}
        </div>
        <h1 style={{color:"#B3B3B3"}} >{status}</h1>
      </div>
    </div>
  );
}

const Stat = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height:"100%",
        marginTop:"2rem" ,
        marginBottom:"2.9rem"
      }}
    >
      {arr.map((itm, idx) => {
        return (
          <Over
            key={idx}
            title={itm.title}
            icon={itm.icon}
            arrow={itm.arrow}
            variation={itm.variation}
            status={itm.status}
          />
        );
      })}
    </div>
  );
};

const Statistics = () => {
  const [graph, setGraph] = useState(true);
  return (
    <Card style={{ width: "67%" }}>
      <div style={{ margin: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{fontSize:"1.5rem",fontWeight:"bold"}}>Your Statistics</h1>
          <div style={{ display: "flex" }}>
            <h1 style={{marginRight:"0.8rem"}}>Graph</h1>
            <Switch
              defaultChecked
              onChange={() => {
                setGraph(!graph);
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
          <h2 style={{ margin: "0"}}>Overview</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ margin: "0", marginRight: "0.5rem" }}>Show:</h1>
            <h1
              style={{ margin: "0", marginRight: "0.5rem", color: "#3672E9" }}
            >
              Monthly
            </h1>
            <img src="./chevrondown.svg" />
          </div>
        </div>

        {graph ? (
          <div>
            <div className="graphtabs">
              <div className="active">
                <h1 style={{ color: "#3672E9", marginBottom: "0" }}>
                  Active user
                </h1>
              </div>
              <h1 className="light">Attendance</h1>
              <h1 className="light">Hour spent</h1>
              <h1 className="light">Enrolled</h1>
              <h1 className="light">Question resolved</h1>
              <h1 className="light">Quiz score</h1>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="uv" stroke="#3672E9" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <Stat />
        )}
      </div>
    </Card>
  );
};

export default Statistics;
