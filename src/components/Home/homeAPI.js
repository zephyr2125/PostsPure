import { gql } from "graphql-tag";

export const GET_HOME_DATA_HEADING = gql`
    query getHomeDataHeading($id: ID!, $language: LanguageCodeEnum!) {
        page(id: $id) {
            id
            translation(language: $language) {
                id
                homeHeading {
                    homeHeading {
                        contentHome
                        titleHome
                    }
                }
            }
        }
    }
`;

export const GET_HOME_DATA_FUSING = gql`
    query getHomeDataFusing($id: ID!, $language: LanguageCodeEnum!) {
        page(id: $id) {
            id
            translation(language: $language) {
                id
                homeFusing {
                    sectionFusing {
                        groupContent {
                            content
                            heading
                            button {
                                target
                                title
                                url
                            }
                        }
                        groupImages {
                            image {
                                sourceUrl
                            }
                        }
                    }
                }
                  
            }
        }
    }
`;

export const GET_HOME_DATA_ABOUT = gql`
    query getHomeDataAbout($id: ID!, $language: LanguageCodeEnum!) {
        page(id: $id) {
            id
            translation(language: $language) {
                id
                homeAboutUs {
                    sectionAboutUs {
                        groupContent {
                            content
                            heading
                            button {
                                url
                                target
                                title
                            }
                        }
                        groupImages {
                            textSpin
                            image {
                                sourceUrl
                            }
                        }
                    }
                }  
            }
        }
    }
`;

export const GET_HOME_DATA_COLLECTION = gql`
    query getHomeDataCollection($id: ID!, $language: LanguageCodeEnum!) {
        page(id: $id) {
            id
            translation(language: $language) {
                id
                homeOurCollection {
                    homeOurCollection {
                        button {
                            target
                            title
                            url
                        }
                        heading
                    }
                }
            }
        }
    }
`;