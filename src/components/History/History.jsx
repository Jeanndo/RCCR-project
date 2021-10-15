import React from 'react'
import { Steps} from 'antd';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

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
        <Steps current={current} onChange={hanleOnChange} direction="vertical">
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
          <Step title="Step 4" description="This is a description." />
        </Steps>
        {/* <Footer/> */}
        </div>
    )
}

export default History
