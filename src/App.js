import React from "react";
import "./resources/styles.css";
import {Element} from "react-scroll";

import Header from "./combonents/header_footer/Header";
import Footer from "./combonents/header_footer/Footer";
import Featured from "./combonents/Featured";
import VenNfo from "./combonents/VenNfo";
import Highlight from "./combonents/Highlight";
import Pricing from "./combonents/Pricing";
import Location from "./combonents/Location";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
      <Featured />
      </Element>

      <Element name="venuenfo">
      <VenNfo />
      </Element>

      <Element name="highlights">
      <Highlight />
      </Element>

      <Element name="pricing">
      <Pricing />
      </Element>

      <Element name="location">
      <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
