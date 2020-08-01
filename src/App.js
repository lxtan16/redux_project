import React from 'react';
import Login from './components/Login';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/login'><Login/></Route>
      </Switch>

      
    </div>
  );
}
export default App;
