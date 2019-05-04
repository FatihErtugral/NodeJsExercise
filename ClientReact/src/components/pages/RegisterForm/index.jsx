import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Register from './register';
import { registerApi } from '../../../api/request'
import '../../../css/member.css';



const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Minimum 3 karakter olabilir.')
    .max(20, 'Maximum 20 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  passworD: Yup.string()
    .max(25, '*')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'En az sekiz karakter, en az bir harf, bir sayı ve bir özel karakter')
    .required('Bu alan zorunludur.'),
  firstName: Yup.string()
    .min(2, 'Minimum 2 karakter olabilir.')
    .max(35, 'Maximum 35 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  lastName: Yup.string()
    .min(2, 'Minimum 2 karakter olabilir.')
    .max(35, 'Maximum 35 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  email: Yup.string()
    .email('Geçersiz e-posta')
    .required('Bu alan zorunludur.'),
});

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitValues = ({ userName, passworD, firstName, lastName, email }) => {
    registerApi(userName, passworD, firstName, lastName, email);
  }
  render() {

    return (
      <Formik
        render={props => <Register {...props} />}
        initialValues={{
          userName: '',
          passworD: '',
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={this.submitValues}
      />
    );
  }
};

export default RegisterForm;