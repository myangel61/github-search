import gql from 'graphql-tag';

export const GET_SMTH: any = gql`
  query {
    viewer {
      avatarUrl,
      name
    }
  }
`;
