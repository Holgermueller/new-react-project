import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Home from "./components/pages/Home";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/nav/Nav";
import Footer from "./components/layout/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {/* /* <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/" exact component={Dashboard} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
