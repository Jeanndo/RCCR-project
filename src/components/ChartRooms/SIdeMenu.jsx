import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  MessageOutlined
} from "@ant-design/icons";


const { Sider } = Layout;

const SIdeMenu = ({ state }) => {
  return (
    <Sider trigger={null} collapsible collapsed={state.collapsed} >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
         Jeanndo
        </Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined style={{color:'green'}}/>}>
           UECR
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined style={{color:'green'}}/>}>
          Kibungo
        </Menu.Item>
        <Menu.Item key="4" icon={<MessageOutlined style={{color:'green'}}/>}>
          Ruhengeri
        </Menu.Item>
        <Menu.Item key="5" icon={<MessageOutlined style={{color:'green'}}/>}>
          Nyundo
        </Menu.Item>
        <Menu.Item key="6" icon={<MessageOutlined style={{color:'green'}}/>}>
          Kabgayi
        </Menu.Item>
        <Menu.Item key="7" icon={<MessageOutlined style={{color:'green'}}/>}>
          Butare
        </Menu.Item>
        <Menu.Item key="8" icon={<MessageOutlined style={{color:'green'}}/>}>
          Nyamagabe
        </Menu.Item>
        <Menu.Item key="9" icon={<MessageOutlined style={{color:'green'}}/>}>
          Cyangugu
        </Menu.Item>
        <Menu.Item key="10" icon={<MessageOutlined style={{color:'green'}}/>}>
          Byumba
        </Menu.Item>
        <Menu.Item key="11" icon={<MessageOutlined style={{color:'green'}}/>}>
          Kigali
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SIdeMenu;
