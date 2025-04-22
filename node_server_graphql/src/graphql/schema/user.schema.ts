const UserSchemaGQL = `#graphql
type User{
    _id: ID!
    name: String!
    gender: String!
    username: String!
    password: String!
    profilePicture: String!
}

type Query {
    users: [User]
    authUser: User
    user(userId: ID!): User
}

type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
}

input SignUpInput{
    username: String!
    name: String!
    password: string
}

input LoginInput {
    username: String!
    password: String!
}

type LogoutResponse {
    message: String!
}
`
export default UserSchemaGQL