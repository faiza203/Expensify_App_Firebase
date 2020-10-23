import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {registerPage , loginPage , createTodoPage, notFoundPage} from "./pageOne"

function AppRouter (){
   return   ( <BrowserRouter>
    <div>
      <Switch>
      <Route path="/" component={registerPage} exact={true} />
      <Route path="/login" component={loginPage} />
      <Route path="/addTodo" component={createTodoPage} />
      <Route component={notFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>);
}  
const App = AppRouter;
export default App;
