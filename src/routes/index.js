import React from "react";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Landing from "../components/Landing/Landing"

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Landing}/>
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;