import React from 'react'
import { List, Avatar, Space,Divider } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import YearlyTeam from './YearlyTeam';
import Footer from '../Footer/Footer';

const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Event ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const YearlyHistory = () => {
    return (
    <>
    <List
    itemLayout="vertical"
    size="large"
    dataSource={listData}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
  <Divider/>
  <h4 style={{textAlign:'center',fontWeight:400,fontSize:'16px'}}>Team</h4>
  <div style={{display:'flex',flexDirection:'row'}}>
  <YearlyTeam/>
  <YearlyTeam/>
  <YearlyTeam/>
  <YearlyTeam/>
  <YearlyTeam/>
  <YearlyTeam/>
  <YearlyTeam/>
  </div>
  </>
    )
}

export default YearlyHistory