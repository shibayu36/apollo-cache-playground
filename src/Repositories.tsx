import React from "react";
import gql from "graphql-tag";
import { useQuery, useApolloClient } from "@apollo/react-hooks";
import { GetMyRepositories } from "./__generated__/GetMyRepositories"

const getMyRepositoriesQuery = gql`
  query GetMyRepositories($first: Int = 10) {
    viewer {
      id
      name
      repositories(first: $first) {
        edges {
          node {
            id
            name
          }
        }
      }
   }
  }
`

export const Repositories: React.FC = () => {
  const client = useApolloClient();

  const { loading, error, data } = useQuery<GetMyRepositories>(
    getMyRepositoriesQuery,
    {
      variables: {
        first: 10
      }
    }
  );
  useQuery<GetMyRepositories>(
    getMyRepositoriesQuery,
    {
      variables: {
        first: 20
      }
    }
  );
  console.log(client.cache.extract())

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const repositories = data!.viewer.repositories.edges;

  return <div className="Repositories">
    <h1>{data!.viewer.name}のレポジトリ一覧</h1>
    {repositories!.map(repo => (
      <div>{repo!.node!.name}</div>
    ))}
  </div>;
}
