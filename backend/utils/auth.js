import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

// secret is the key that will be used to sign the token.
const secret = "mysecretssshhhhhhh";

// expiration is the amount of time until the token expires.
const expiration = "2h";

export const AuthenticationError = new GraphQLError(
  "Could not authenticate user.",
  {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }
);

export const signToken = ({ email, username, _id }) => {
  const payload = { email, username, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};
