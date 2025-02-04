import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
const MyForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = 'Email is required';
        if (!values.password) errors.password = 'Password is required';
        return errors;
      }}
      onSubmit={(values) => {
        console.log('Form submitted', values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <div>
            <Field
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? 'Hide' : 'Show'} Password
            </button>
          </div>
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default MyForm