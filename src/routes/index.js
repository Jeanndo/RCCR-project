import React from "react";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Landing from "../components/Landing/Landing"
import News from '../components/News/News'
import Chart from '../components/ChartRooms/Chart'
import Dashboard from '../components/AdminDashboard/dashboard'
import Signup from '../components/Auth/Signup'
import Signin from '../components/Auth/Login'
import History from "../components/History/History";
import Documentations from "../components/Documents/Documents";
import PlayerGroups from "../components/PlayerGroups/PlayerGroups";

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
           <Route exact path="/" component={Landing}/>
           <Route exact path="/news" component={News}/>
           <Route exact path="/chart-rooms" component={Chart}/>
           <Route exact path="/signup" component={Signup}/>
           <Route exact path="/login" component={Signin}/>
           <Route exact path="/history" component={History}/>
           <Route exact path="/dashboard" component={Dashboard}/>
           <Route exact path="/documents" component={Documentations}/>
           <Route exact path="/prayer/groups" component={PlayerGroups}/>
           
          </Switch>
        </Router>
      );
    }
  }
  export default Routes;