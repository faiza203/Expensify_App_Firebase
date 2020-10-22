import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {registerPage} from "./pageOne"

function AppRouter (){
   return   ( <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={registerPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>);
}  
const App = AppRouter;
export default App;
