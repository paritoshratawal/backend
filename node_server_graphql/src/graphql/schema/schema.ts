
// export const graphQLSchema = `#graphql

// type Query {
//     hello: String

// }

// type Mutation {
//     addPost(title: String!, content: String!): Post
// }

// type Post {
//     title: String
//     content: String
// }
// `;
export const graphQLSchema = `#graphql
    type Roles{
        # created_at: String!
        role: String!
        # access: [String!]
    }

    type Query {
        hello: String
        roles: [Roles]
    }
`;    