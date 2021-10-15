import React from 'react'
import { Steps} from 'antd';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Row, Col, Divider } from 'antd';
import YearlyHistory from './YearlyHistory';

const style = { background: '#0092ff', padding: '8px 0' };

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
        <Navigation/>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 16 }}style={{margin:'0px 50px 0px 50px'}}>
        <Col className="gutter-row" span={4}>
        <Steps current={current} onChange={hanleOnChange} direction="vertical">
          <Step title="1950" />
          <Step title="1960"  />
          <Step title="1970" />
          <Step title="1980" />
          <Step title="1990" />
          <Step title="2000"  />
          <Step title="2010" />
          <Step title="2020" />
        </Steps>
        </Col>
        <Col className="gutter-row" span={18}>
            <YearlyHistory/>
        </Col>
        </Row>
    </div>
    )
}

export default History
