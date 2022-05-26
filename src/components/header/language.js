import React from "react";
import { useQuery } from "@apollo/client/react";

import { GET_LANGUAGE } from "./headerAPI";

const Language = () => {

    const { data } = useQuery(GET_LANGUAGE);

    return (
        <>
            <div className="head-polylang">
                <div className="language">
                    <ul>
                        {
                            data?.languages.map((item) => {
                                return (
                                    <li key={item.code} className="lang-item lang-item-10 lang-item-en current-lang">
                                        <a className="lang-item-flag" href="#">{item.code}</a>
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