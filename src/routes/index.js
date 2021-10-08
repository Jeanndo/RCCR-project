import React from "react";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Landing from "../components/Landing/Landing"
import News from '../components/News/News'

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Landing}/>
           <Route exact path="/news" component={News}/>
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;