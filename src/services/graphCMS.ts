import { GraphQLClient } from "graphql-request";

const GRAPHCMS_API = process.env.GRAPHCMS_API || "";

async function graphCMS(query: string, variables?: object) {
  const graphQLClient = new GraphQLClient(GRAPHCMS_API);

  try {
    return graphQLClient.request(query, variables);
  } catch (error) {
    return { error };
  }
}

export default graphCMS;
