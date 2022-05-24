import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "gatsby";

import { GET_LOGO } from "./headerAPI";

const Logo = () => {
    const { data } = useQuery(GET_LOGO);
    return ( 
        <>
            <div className="header-titles">
                <Link to="/" className="custom-logo-link">
                    <img src={data?.siteLogo.sourceUrl} alt="logo" className="custom-logo" />
                </Link>             
            </div>
        </>
     );
}
 
export default Logo;