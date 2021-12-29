import { Card } from "antd";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  Tooltip,
  Legend,
} from "recharts";

const Intro=()=>{
  return(
      <h1 style={{color:"#3672E9",background:"#D5E3FF",borderRadius:"5px",padding:"0.3rem",fontWeight:"bold",fontSize:"0.75rem",margin:"0"}}>Introduction to hadoop</h1>
  );
}

const Visitors = () => {
  const chartBar = [
    {
      name: "Monday",
      uv: 9000,
      pv: 72400,
    },
    {
      name: "Tuesday",
      uv: 25000,
      pv: 72400,
    },
    {
      name: "Wednesday",
      uv: 20000,
      pv: 72400,
    },
    {
      name: "Thursday",
      uv: 20000,
      pv: 72400,
    },
    {
      name: "Friday",
      uv: 45000,
      pv: 72400,
    },
    {
      name: "Staurday",
      uv: 45000,
      pv: 72400,
    },
    {
      name: "Sunday",
      uv: 45000,
      pv: 72400,
    },
  ];

  const CustomTooltipFormatter = ({ payload }) => {
    return (
      <div style={{ background: "#000", color: "#fff", padding: "10px" }}>
        <h1 style={{ color: "#fff" }}>Viewed : {payload[0]?.value}</h1>
        <h1 style={{ color: "#fff" }}>Purchased : {payload[1]?.value}</h1>
      </div>
    );
  };

  return (
    <Card style={{ width: "67%", padding: "1rem" }}>
      <h2 style={{}}>Visitors</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "0",
            marginRight: "5rem",
          }}
        >
          254,845
        </h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <h1 style={{ fontSize: "0.75rem", margin: "0", fontWeight: "bold" }}>
            Most visited
          </h1>
          <Intro />
          <Intro />
          <Intro />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          <h1 style={{ color: "#B3B3B3" }}>New/Returning</h1>
          <h1 style={{ color: "#B3B3B3" }}>45,762/2491</h1>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            <img style={{ marginBottom: "0.5rem" }} src="/purple.svg" />
            <h1 style={{}}>New Visitor</h1>
          </div>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            <img style={{ marginBottom: "0.5rem" }} src="/blue.svg" />
            <h1>Returning Visitor</h1>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <BarChart
            width="100%"
            height={180}
            data={chartBar}
            barCategoryGap="27%"
          >
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={(v) => CustomTooltipFormatter(v)} />
            {/* <Legend /> */}
            <Bar dataKey="pv" fill="#4318FF" radius={[100, 100, 0, 0]} />
            <Bar dataKey="uv" fill="#6AD2FF" radius={[100, 100, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default Visitors;
