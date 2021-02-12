import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from "./Components/Dashboard";
import SignInPage from "./Components/Auth/SignInPage";
import SignUpPage from "./Components/Auth/SignUpPage";
import CreateTask from './Components/Task/CreateTask';
import AddTaskManager from './Components/Task/AddTaskManager';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route path='/' exact component={Dashboard} />
       <Route path='/signin' component={SignInPage} />
       <Route path='/signup' component={SignUpPage} />
       <Route path='/createtask' component={CreateTask} />
       <Route path='/addtaskmanager' component={AddTaskManager} />
     </Switch>  
    </div>
    </BrowserRouter>
   
  );
}

export default App;
