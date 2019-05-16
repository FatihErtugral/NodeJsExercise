
import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import RegisterForm from './RegisterForm';

const REGISTER_USER = gql`
  mutation Register(
     $Email:String!,
     $Password:String!,
     $FirstName:String!,
     $LastName:String!,
     $UserName:String!,
     ){
  UserCreate(input:{
    UserName:$UserName
    Password:$Password
    FirstName:$FirstName
    LastName:$LastName
    Email:$Email
  }){
    token
  }
}
`;
export const Register = () => {
   return (
      <ApolloConsumer>
         {client => (
            <Mutation
               mutation={REGISTER_USER}
               onCompleted={({ UserCreate }) => {
                  if(UserCreate.token){
                     localStorage.setItem('token', UserCreate.token);
                     client.writeData({ data: { isLoggedIn: true } });
                  }

               }}
            >
               {(submitValue, { loading, error }) => {
                  if (loading) return <p>loading...</p>;
                  if (error) return <p>{error.message}</p>;
                  return (<RegisterForm handleSubmit={submitValue} />);
               }}
            </Mutation>
         )}
      </ApolloConsumer>
   );
}