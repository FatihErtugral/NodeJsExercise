
import React from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { LoginForm } from './LoginForm';

const LOGIN_USER = gql`
  mutation Login($Email:String!, $Password:String!){
    Login(input:{
      Password:$Password,
      Email:$Email
    }){
      token
    }
  }
`;
export const Login = ()=>{
  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={({ Login }) => {
            Login.token && localStorage.setItem('token', Login.token );
            client.writeData({ data: { isLoggedIn: true } });
          }}
        >
          {(login, { loading, error }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>;

            return (<LoginForm login={login} />);
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
}