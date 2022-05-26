import React from "react";
import Banner from "../Banner";
import { useQuery } from "@apollo/client/react";

import { GET_HOME_DATA_HEADING } from "./homeAPI";

import Heading from "./Heading";
import About from "./About";

const Home = () => {
    const idPage = "cG9zdDoxODc=";
    const language = "EN";

    // const { data } = useQuery(GET_HOME_DATA_HEADING,{
    //     variables:{
    //         id: idPage,
    //         language: language
    //     }

    // });

    

    return ( 
        <>
            <Heading idPage={idPage} language={language} />
            <About idPage={idPage} language={language} />
        </>
     );
}
 
export default Home;