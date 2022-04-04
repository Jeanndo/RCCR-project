import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Toorbar from "../Navigation/Toolbar/Toolbar";
import Footer from "../Footer/Footer";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "#",
    title: `Live christian life ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Address a prayer to God with RCC.",
    content:
      "We are The Rwandan Charismatics,it's very greatfull Join us right now, are you looking for the place where you can find charismatic units? Don't worry! here we go!, this is where you are looking for!. in God we believe, in Jesus we trust, Holy spirit our pariticularity and we can't also forget Holy Mary. ",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const News = () => {
  return (
    <div>
      <Toorbar />
      <div className="row" >
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://cdn.vectorstock.com/i/1000x1000/65/08/pentecost-sunday-holy-spirit-vector-28346508.webp"
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
      </div>
      <Footer />
    </div>
  );
};

export default News;
