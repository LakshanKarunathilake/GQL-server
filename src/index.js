import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
const app = express();
const schema = gql`
  type Query {
    me: User
  }
  type User {
    username: String!
  }
`;
const resolvers = {
  Query: {
    me: () => {
      return {
        username: "Robin Wieruch"
      };
    }
  }
};
