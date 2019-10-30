/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyRepositories
// ====================================================

export interface GetMyRepositories_viewer_repositories_edges_node {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
}

export interface GetMyRepositories_viewer_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetMyRepositories_viewer_repositories_edges_node | null;
}

export interface GetMyRepositories_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (GetMyRepositories_viewer_repositories_edges | null)[] | null;
}

export interface GetMyRepositories_viewer {
  __typename: "User";
  id: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetMyRepositories_viewer_repositories;
}

export interface GetMyRepositories {
  /**
   * The currently authenticated user.
   */
  viewer: GetMyRepositories_viewer;
}
