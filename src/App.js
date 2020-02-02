import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Artist from "./components/pages/Artist";
import Album from "./components/pages/Album";
import Format from "./components/pages/Format";
import Genre from "./components/pages/Genre";
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
        <Route path="/artist" component={Artist} />
        <Route path="/album" component={Album} />
        <Route path="/format" component={Format} />
        <Route path="/genre" component={Genre} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
