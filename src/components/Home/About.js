import React from "react";
import { useQuery } from "@apollo/client/react";
import { Link } from "gatsby";
import CircleType from "circletype";

import { GET_HOME_DATA_ABOUT } from "./homeAPI";

const Heading = (props) => {
    const idPage = props.idPage;
    const language = props.language;

    const { data } = useQuery(GET_HOME_DATA_ABOUT, {
        variables: {
            id: idPage,
            language: language
        }
    });
 
    
       
    // const circleType = new CircleType(document.querySelector(".circular-text .text"))
    // circleType.radius(65)

    return (
        <>
            <section className="home-about-us container">
                <div className="container_home-about">
                    <div className="container_left">
                        <h2 className="split off">{data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.heading}</h2>
                        <p dangerouslySetInnerHTML={{ __html: data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.content }} />
                        <Link 
                            to={data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.url}
                            className="button"
                            target={data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.target}
                        >
                            {data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.title}
                        </Link>
                    </div>
                    <div className="container_right">
                        <div className="image_right">
                            <img
                                src={data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.image.sourceUrl}
                                alt={data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.image.sourceUrl}
                            />
                            <div className="text_spin circular-text">
                                <p className="text">
                                    {/* {data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.textSpin} */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Heading;