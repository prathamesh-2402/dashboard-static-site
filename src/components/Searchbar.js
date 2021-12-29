import { Input, Button, Select, Card } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const Searchbar = () => {
  return (
    <Card style={{ width: "40%", padding: "0.5rem" }}>
      <Input.Group style={{ display: "flex",background:"#FAFAFA",alignItems:"center" }} compact>
        <span style={{color:"#6A707E",paddingLeft:"0.5rem"}}>Show:</span>
        <Select defaultValue="Option1" bordered={false} style={{color:"#3672E9"}}>
          <Option value="Option1">Employee</Option>
          <Option value="Option2">Team</Option>
          <Option value="Option3">Business unit</Option>
        </Select>
        <Input width="100%" placeholder="Search team" suffix={<SearchOutlined />} bordered={false}/>
      </Input.Group>
    </Card>
  );
};

export default Searchbar;
