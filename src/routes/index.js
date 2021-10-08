import React from "react";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Landing from "../components/Landing/Landing"
import News from '../components/News/News'
import Chart from '../components/ChartRooms/Chart'

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Landing}/>
           <Route exact path="/news" component={News}/>
           <Route exact path="/chart-rooms" component={Chart}/>
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;