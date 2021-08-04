import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
    {/* <Navigation/> */}
    <Main />
    </div>
    {/* <Footer /> */}
    </div>
  );
}

const AppWithRouter = withRouter(App);

const Main = () => (
<Switch>
    <Route exact path="/" component={Home}></Route>
    {/* <Route exact path="/login" component={Login}></Route>
    <Route exact path="/dashboard" component={Dashboard}></Route>
    <Route exact path="/logout" component={Logout}></Route>
    <Route exact path="/contacts" component={Contacts}></Route>
  <Route exact path="/about" component={About}></Route> */}
  </Switch>
);
export default AppWithRouter;
