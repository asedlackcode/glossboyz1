import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import Main from "./pages/Main";
import Home from "./pages/Home/Home";
import Showcase from "./pages/Showcase";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <Router>
    <div>
      {/* <Nav/> */}
      <Main>
      <Route exact path="/" component={Home}/>
      <Route exact path="/showcase" component={Showcase}/>
      <Route exact path= "/appointment" component={Appointment}/>
      </Main>
    </div>
    </Router>
  );
}

export default App;