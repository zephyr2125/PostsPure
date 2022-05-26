import React from "react";
import { useQuery } from "@apollo/client/react";

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

    return (
        <>
            <section className="home-about-us container">
                <div className="container_home-about">
                    <div className="container_left">
                        <h2 className="split off">{data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.heading}</h2>
                        <p dangerouslySetInnerHTML={{ __html: data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.content }} />
                        <a className="button"
                            href={data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.url}
                            target={data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.target} >
                            {data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.title}
                        </a>
                    </div>
                    <div className="container_right">
                        <div className="image_right">
                            <img
                                src={data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.image.sourceUrl}
                                alt={data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.image.sourceUrl}
                            />
                            <div className="text_spin circular-text">
                                <p className="text">
                                    {data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.textSpin}
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