import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import './ui.css'
import './Mediaqueries.css'
const App =()=>{
  return (
    <BrowserRouter>
     <Routes/>
    </BrowserRouter>
  );
}

export default App;
