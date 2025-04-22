
import { helloWord,newPost, getRoles } from "../../controllers/graphql.js";

export const graphQLResolver = {
    Query: {
        hello: helloWord,
        roles: getRoles
    },
    // Mutation: {
    //     addPost:newPost,
    // },
};

