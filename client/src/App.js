import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />          
          <Route exact path="/Favorite" component={Favorite} />      
          <Route exact path="/search" component={Search} />
                  
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
