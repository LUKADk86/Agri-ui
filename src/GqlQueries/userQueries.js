import { gql } from 'apollo-boost';

export const createUser = gql`
mutation createUser(
$email: String!
$password: String!){
  createUser(email:$email, password:$password){id}
  
}
`;