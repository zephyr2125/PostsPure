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
            <section class="home-about-us container">
                <div class="container_home-about">
                    <div class="container_left">
                        <h2 class="split off">{data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.heading}</h2>
                        <p dangerouslySetInnerHTML={{ __html: data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.content }} />
                        <a class="button"
                            href={data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.url}
                            target={data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.target} >
                            {data?.page.translation.homeAboutUs.sectionAboutUs.groupContent.button.title}
                        </a>
                    </div>
                    <div class="container_right">
                        <div class="image_right">
                            <img
                                src={data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.image.sourceUrl}
                                alt={data?.page.translation.homeAboutUs.sectionAboutUs.groupImages.image.sourceUrl}
                            />
                            <div class="text_spin circular-text">
                                <p class="text">
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