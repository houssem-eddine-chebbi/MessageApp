import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import {DisplayNameProvider} from "./Contexts/UserContext";

function App() {

  return (
    <div className="App">
      <DisplayNameProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/login" ><Login /></Route>
            <Route path="/messages" ><Messages /></Route>
          </Switch>
        </BrowserRouter>
      </DisplayNameProvider>
    </div>
  );
}

export default App;
