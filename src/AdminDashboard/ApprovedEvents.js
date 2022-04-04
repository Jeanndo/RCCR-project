import React from "react"
import { List } from "antd"
import { useStyles } from "./style"

const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `Topic of the event${i}`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five .",
  })
}

const ApprovedEvents = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 3,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <button
                className={classes.SendBtn}
                style={{ width: "100px" }}
                disabled
              >
                Approved
              </button>,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__340.jpg"
              />
            }
          >
            {/* <List.Item.Meta title={item.title} /> */}
            {item.content}
          </List.Item>
        )}
      />
    </React.Fragment>
  )
}

export default ApprovedEvents
