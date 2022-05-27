import React, { useContext } from "react";
import { useQuery } from "@apollo/client/react";
import { Context } from "../../context";

import { GET_LANGUAGE } from "./headerAPI";

const Language = () => {

    const { data } = useQuery(GET_LANGUAGE);
    const {setLanguage} = useContext(Context)

    return (
        <>
            <div className="head-polylang">
                <div className="language">
                    <ul>
                        {
                            data?.languages.map((item) => {
                                return (
                                    <li key={item.code} className="lang-item lang-item-10 lang-item-en current-lang">
                                        <a 
                                            className="lang-item-flag" 
                                            href="#"
                                            onClick={(e) => { setLanguage(item.code) }}
                                        >
                                            {item.code}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Language;