import { gql } from "graphql-tag";

export const GET_LOGO = gql `
    query getLogo {
        siteLogo {
            sourceUrl
        }
    }
`;

export const GET_LANGUAGE = gql `
    query getLanguage {
        languages {
            code
        }
    }
`;