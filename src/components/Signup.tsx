import React, { FC } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Stack, Button } from '@chakra-ui/react'
import * as Yup from 'yup';
import './authforms.css'
type Props = {

}

const Signup: FC<Props> = () => {

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email adress').required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
  );
}

export default Signup;