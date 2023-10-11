import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

function Event() {

  return (
    <div className="row">
      <Header />
      {/* middle */}
      <div className="container event">
        <div className="row">
          <div className="event__title">
            Events
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Event;
