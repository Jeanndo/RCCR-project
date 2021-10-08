import React from 'react'
import { Row, Col } from "antd";
import { Menu } from "antd";
import { Badge } from 'antd';
import Messages from './Messages';

const ChartBody = () => {
    return (
        <div className="chart-body-container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}>
          <Col className="gutter-row " span={4}>
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<Badge status="success"/>}>
            Jeanndo
            </Menu.Item>
            <Menu.Item key="2" icon={<Badge status="success"/>}>
             Izere
            </Menu.Item>
            <Menu.Item key="3" icon={<Badge status="success"/>}>
            Mudidi
            </Menu.Item>
            <Menu.Item key="4" icon={<Badge status="success"/>}>
             Arthur
            </Menu.Item>
            <Menu.Item key="5" icon={<Badge status="success"/>}>
             patrick
            </Menu.Item>
            <Menu.Item key="6" icon={<Badge status="success"/>}>
             Dyd
            </Menu.Item>
            <Menu.Item key="7" icon={<Badge status="success"/>}>
            Odille
            </Menu.Item>
            <Menu.Item key="8" icon={<Badge status="success"/>}>
            Claire
            </Menu.Item>
           </Menu>
          </Col>
          <Col className="gutter-row " span={18}>
              <Messages/>
          </Col>
          </Row>
        </div>
    )
}

export default ChartBody
