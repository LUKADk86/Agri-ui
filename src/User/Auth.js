import React from 'react';
import { Button } from 'reactstrap';
import {useMutation} from '@apollo/react-hooks';
import { Formik, Field, Form } from "formik";
import { createUser } from '../GqlQueries/userQueries';



function Auth() {
    const [authUser, {data}] = useMutation(createUser);
  return (
    <div>
    <Formik
    initialValues={{ email: "123@agri-help.com", password: "entrez" }}
    onSubmit= {(values)=>{
        console.log(values);
        authUser({
            variables: {
                email: values.email,
                password: values.password
            }
        })
        console.log({data})
        
    }}
  >
    <Form>
      <Field name="email" type="email" placehoder="entrez votre mail"/>
      <Field name="password" type="password" value/>
      <Button type="submit">Créer votre compte</Button>
    </Form>
  </Formik>
    </div>
  );
}

export default Auth;