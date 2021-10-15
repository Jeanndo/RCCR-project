import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const { Header, Sider, Content } = Layout;

const PlayerGroups = () => {

    const [state,setState] = React.useState({collapsed:false})
     const toggle = () => {
        setState({ collapsed:!state.collapsed});
      };

      
    return (
        <>
        <Navigation/>
        <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed} style={{backgroundColor:'#fff'}}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Ruhengeri
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
             Kigali
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Butare
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0,backgroundColor:'#fff'}}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick:toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      </>
    )
}

export default PlayerGroups
