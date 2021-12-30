import React, { FC } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Stack, Button } from '@chakra-ui/react'
import * as Yup from 'yup';
import axios from 'axios';
import './authforms.css';

type Props = {

}

const Signup: FC<Props> = () => {

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email adress').required('Required'),
          password: Yup.string()
            .min(8).required('Required')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:3001/signup', values)
            .then(res => {
              console.log(`Status: ${res.status}`);
              console.log('Body: ', res.data);
            }).catch(err => {
              console.log('we got an error boiz', err)
            }).finally(() => {
              setSubmitting(false);
            })
        }}

      >
        <Form className="auth-forms">
          <Stack>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <Button
              // isLoading={setSubmitting}
              // loadingText='Submitting'
              colorScheme='teal'
              variant='outline'
              type="submit"
            >
              SIGNUP
            </Button>
          </Stack>
        </Form>

      </Formik>
    </div>
  );
}

export default Signup;