import React from "react";
import { useQuery } from "@apollo/client/react";
import { Link } from "gatsby";

import { GET_HOME_DATA_FUSING } from "./homeAPI";

const Heading = (props) => {
    const idPage = props.idPage;
    const language = props.language;

    const { data } = useQuery(GET_HOME_DATA_FUSING, {
        variables: {
            id: idPage,
            language: language
        }
    });

    console.log(data);

    return (
        <>
            <section className="home-fusing container">
                <div className="container_fusing">
                    <div className="container_left">
                        <div className="image_left">
                            <img 
                                src={data?.page.translation.homeFusing.sectionFusing.groupImages.image.sourceUrl}
                                alt="" 
                            />
                        </div>
                    </div>
                    <div className="container_right">
                        <h2 className="split off">{data?.page.translation.homeFusing.sectionFusing.groupContent.heading}</h2>
                        <p dangerouslySetInnerHTML={{ __html: data?.page.translation.homeFusing.sectionFusing.groupContent.content }} />
                        <Link 
                            className="button"
                            to={data?.page.translation.homeFusing.sectionFusing.groupContent.button.url}
                            target={data?.page.translation.homeFusing.sectionFusing.groupContent.button.target}
                        >
                            {data?.page.translation.homeFusing.sectionFusing.groupContent.button.title}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Heading;