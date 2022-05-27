import { gql } from "graphql-tag";

export const GET_LOGO = gql`
    query getLogo {
        siteLogo {
            sourceUrl
        }
    }
`;

export const GET_LANGUAGE = gql`
    query getLanguage {
        languages {
            code
        }
    }
`;

export const GET_MENU = gql`
    query getMenu {
        menuItems {
            edges {
                node {
                    id
                    label
                    url
                }
            }
        }
    }
`;