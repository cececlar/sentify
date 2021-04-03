import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
