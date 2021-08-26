import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import {DisplayNameProvider} from "./Contexts/UserContext";
import Messages from "./Components/Messages";
import {MessagesProvider} from "./Contexts/Messages.context";

function App() {

  return (
    <div className="App">
      <DisplayNameProvider>
        <MessagesProvider>
            <BrowserRouter>
              <Switch>
                <Route path="/login" ><Login /></Route>
                <Route path="/messages" ><Messages /></Route>
              </Switch>
            </BrowserRouter>
        </MessagesProvider>
      </DisplayNameProvider>
    </div>
  );
}

export default App;
