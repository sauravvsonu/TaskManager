
import Dashboard from "./Components/Dashboard";
import { Component } from 'react';
import Login from './Components/Auth/Login';
import LoginDashboad from "./Components/Auth/LoginDashboad";
import SignupDashboard from "./Components/Auth/SignupDashboard";

export class App extends Component {

  render() {
    return (
      <LoginDashboad />
    )
  }
}


export default App;
