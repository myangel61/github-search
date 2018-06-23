import gql from 'graphql-tag';

export const GET_SMTH: any = gql`
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
`;
