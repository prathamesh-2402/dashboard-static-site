import React from "react";
import "../css/HeadBar.css"
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const HeadBar = () => {
  return (
    <div>
      <div className="bar">
        <div className="firsthalf">
            <img style={{marginRight:"5.8rem"}} src="./logo.svg" />
            {/* <Dropdown > */}
            <Button type="primary">
                Explore <DownOutlined />
            </Button>
            {/* </Dropdown> */}
            <div className="searchbar">
                <img className="searchicon" src="./search.svg" />
                <h3 style={{margin:"0"}}>Search course</h3>
            </div>
        </div>
        <div className="accountdetails">
            <img src="./bell.svg" />
            <img className="avatar" src="./avatar.png"/>
            <div>
                <div className="name">
                    <h4 className="jane">Jane Doe</h4>
                    <img src="./arrowdown.svg"/>
                </div>
                <h5 style={{fontWeight:"lighter",margin:"0"}}>987654321</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;
