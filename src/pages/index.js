import React from "react";
import Seo from "../components/seo";

import Home from "../components/Home";

const IndexPage = () => {


  return (
    <div className="home__container">
      <Seo title="Homepage" />
      <div className="home__wrapper">
        <Home />
      </div>
    </div>
  )
}

export default IndexPage
