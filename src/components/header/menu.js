import React from "react";
import { Link } from "gatsby";
import { useQuery } from "@apollo/client/react";

// import { GET_HEADER_DATA } from "./headerAPI";

const Menu = () => {
    return (
        <>
            <div className="menu-main-menuen-container"><ul id="menu-main-menuen" className="menu"><li id="menu-item-223" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-223"><a href="https://72.arrowhitech.net/pt2/PortsPure/about-us/">About Us</a></li>
                <li id="menu-item-93" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-93"><a href="#">Collections</a>
                    <ul className="sub-menu">
                        <li id="menu-item-463" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-463"><a href="#">Winter/Fall ’11 Concept</a></li>
                        <li id="menu-item-464" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-464"><a href="#">SPRING/SUMMER ’22  HUMANITY</a></li>
                        <li id="menu-item-465" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-465"><a href="#">Winter/Fall ’11 Concept</a></li>
                        <li id="menu-item-466" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-466"><a href="#">SPRING/SUMMER ’22  HUMANITY</a></li>
                        <li id="menu-item-467" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-467"><a href="#">Winter/Fall ’11 Concept</a></li>
                    </ul>
                </li>
                <li id="menu-item-436" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-436"><a href="https://72.arrowhitech.net/pt2/PortsPure/en/sustainability/">Sustainability</a></li>
                <li id="menu-item-95" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-95"><a href="#">News &amp; Events</a></li>
                <li id="menu-item-225" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="https://72.arrowhitech.net/pt2/PortsPure/en/stores/">Stores</a></li>
                <li id="menu-item-224" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224"><a href="https://72.arrowhitech.net/pt2/PortsPure/en/contact-us/">Contact Us</a></li>
            </ul></div>
        </>
    );
}

export default Menu;