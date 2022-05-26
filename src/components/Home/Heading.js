import React from "react";
import { useQuery } from "@apollo/client/react";

import { GET_HOME_DATA_HEADING } from "./homeAPI";

const Heading = (props) => {
    const idPage = props.idPage;
    const language = props.language;

    const { data } = useQuery(GET_HOME_DATA_HEADING,{
        variables:{
            id: idPage,
            language: language
        }
    });

    return ( 
        <>
        </>
     );
}
 
export default Heading;