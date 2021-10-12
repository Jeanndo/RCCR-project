import React from 'react'
import { Row, Col } from "antd";
import { Input } from 'antd';
import {SendOutlined,PaperClipOutlined} from '@ant-design/icons';


const Messages = () => {
    return (
        
           <Row gutter={{ xs: 8, sm: 16, md: 24, lg:16}} style={{backgroundColor:'#fff',padding:'10px'}}>
                <Col className="gutter-row " span={24}>
                 <div className="message-container">
                 <Col className="gutter-row " span={12}>
                   <div className="user-one">
                   Phasellus tellus dolor, aliquet vel mattis id, elementum at odio.
                   </div>
                   </Col>
                   <Col className="gutter-row " span={12}>
                   <div className="user-two">
                   Phasellus tellus dolor, aliquet vel mattis id, elementum at odio.
                   </div>
                   </Col>
                 </div>
                 
                 <form>
                 <Input size="large"
                  placeholder="large size"
                   prefix={<PaperClipOutlined style={{cursor:'pointer',color:'#69c0ff'}}/>}
                   suffix={<SendOutlined style={{cursor:'pointer',color:'#69c0ff'}}/>} 
                    style={{borderRadius:'10px'}}
                   />
                </form>
                </Col>
           </Row> 
        
    )
}

export default Messages
