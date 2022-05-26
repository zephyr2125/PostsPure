import React, { useContext } from "react";
import Banner from "../Banner";
import { Context } from "../../context";

import Heading from "./Heading";
import About from "./About";
import Fusing from "./Fusing";

const Home = () => {
    const idPage = "cG9zdDoxODc=";
    const { language } = useContext(Context)

    return ( 
        <>
            <Heading idPage={idPage} language={language} />
            <About idPage={idPage} language={language} />
            <Fusing idPage={idPage} language={language} />
        </>
     );
}
 
export default Home;