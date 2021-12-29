import React from "react";
import { Layout, Menu, Typography, Card } from "antd";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { name: "A", value: 25, fill: "#FF930F" },
  { name: "B", value: 36, fill: "#00FF87" },
  { name: "D", value: 39, fill: "#FF5E5E" },
];

const Graph = () => {
  const CustomTooltipFormatter = ({ payload }) => {
    return (
      <div style={{ background: "#000", color: "#fff", padding: "10px" }}>
        <h1 style={{ color: "#fff" ,margin:"0" }}>{payload[0]?.value}%</h1>
      </div>
    );
  };

  return (
    <Card style={{ width: "33%", padding: "1rem" }}>
      <h2>Course</h2>
      <h1 style={{ fontWeight: "lighter" }}>Total course assigned</h1>
      <div style={{ display: "flex",alignItems:"center" }}>
        <ResponsiveContainer width="50%" height={180}>
          <PieChart>
            <Pie
              data={chartData}
              cx={"35%"}
              cy={"50%"}
              fill="#8884d8"
              dataKey="value"
              innerRadius={40}
              outerRadius={80}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill ? entry.fill : "blue"}
                />
              ))}
            </Pie>
            <Tooltip content={(v) => CustomTooltipFormatter(v)} />
          </PieChart>
        </ResponsiveContainer>

        <div style={{ fontSize: "0.75rem",alignItems:"center" }}>
          <div style={{display:"flex", marginBottom:"1rem"}}>
            <img style={{marginRight:"0.5rem"}} src="./greentick.svg"/>
            <h1 style={{margin:"0"}}>Course complete</h1>
          </div>
          <div style={{display:"flex", marginBottom:"1rem"}}>
            <img style={{marginRight:"0.5rem"}} src="./stonks.svg"/>
            <h1 style={{margin:"0"}}>Ongoing Course</h1>
          </div>
          <div style={{display:"flex"}}>
            <img style={{marginRight:"0.5rem"}} src="./imp.svg"/>
            <h1 style={{margin:"0"}}>Not Started</h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Graph;
