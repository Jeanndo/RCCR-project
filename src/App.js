import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import './ui.css'
import './Mediaqueries.css'
import './grid.css'
const App =()=>{
  return (
    <BrowserRouter>
     <Routes/>
    </BrowserRouter>
  );
}

export default App;
