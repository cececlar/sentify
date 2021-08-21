import "./App.scss";
import React from "react";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Newsfeed from "./pages/Newsfeed";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Newsfeed} />
          <Route exact path="/sentiment" component={Home} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
