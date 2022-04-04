import React from 'react'
import { Steps} from 'antd';
import Toorbar from "../Navigation/Toolbar/Toolbar";
import Footer from '../Footer/Footer';
import { Row, Col, Divider } from 'antd';
import YearlyHistory from './YearlyHistory';
import Marquee from 'react-fast-marquee';

const { Step } = Steps;

const History = () => {

  
    const [state,setState]=React.useState({current: 0})

      const hanleOnChange = current => {
        console.log('onChange:', current);
        setState({ current });
      };

    const { current } = state;

    return (
      <div>
        <Toorbar />
        <Marquee> <h2>History of Charismatique in Rwanda from 1950 until now.</h2></Marquee>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}style={{margin:'0px 50px 0px 50px'}}>
        <Col className="gutter-row" span={4} style={{position:'fixed'}}>
        <Steps current={current} onChange={hanleOnChange} direction="vertical">
          <Step title="2022" />
          <Step title="2021"  />
          <Step title="2020" />
          <Step title="2019" />
        </Steps>
        </Col>
        <Col className="gutter-row" span={18} style={{marginLeft:"200px"}}>
            <YearlyHistory/>
        </Col>
        </Row>
        <Footer/>
    </div>
    )
}

export default History
