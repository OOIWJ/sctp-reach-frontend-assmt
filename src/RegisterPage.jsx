import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';



function RegisterPage() {

  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string().test(
      'name-check',
      'Please fill in the last name.',
      function (value) {
        return value || this.parent.firstName; // Pass if either field is filled
      }
    ),

    // firstName: Yup.string().required('First name is required'),
    // lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };


  const handleSubmit = async (values, formikHelpers) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, values);
      console.log('Registration successful:', response.data);
      // show success message
      showMessage('Registration successful!', 'success');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      // show error message
      showMessage(error.response?.data || error.message, 'danger');
    } finally {
      formikHelpers.setSubmitting(false);
      // redirect to the home page after registration using wouter, and pass the message
      setLocation('/');
    }

  };

  // const handleSubmit = (values, formikHelpers) => {
  //   // Here you would typically make an API call to register the user
  //   console.log('Form values:', values);
  //   formikHelpers.setSubmitting(false);
  // };


  return (
    <div className="container mt-5">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>

            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <Field
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <Field
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
              />
              {formik.errors.lastName && formik.touched.firstName && formik.touched.lastName ? <div class="text-danger">{formik.errors.lastName}</div> : null}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
              />
              {formik.errors.email && formik.touched.email ? <div class="text-danger">{formik.errors.email}</div> : null}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
              {formik.errors.password && formik.touched.password ? <div class="text-danger">{formik.errors.password}</div> : null}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <Field
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
              />
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div class="text-danger">{formik.errors.confirmPassword}</div> : null}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={formik.isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterPage;