import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Login from './login';
import '../../../css/member.css';



const LoginSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Minimum 3 karakter olabilir.')
    .max(20, 'Minimum 20 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  passworD: Yup.string()
    .max(25, '*')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'En az sekiz karakter, en az bir harf, bir sayı ve bir özel karakter')
    .required('Bu alan zorunludur.'),
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitValues = ({ userName, passworD }) => {
    console.log({ userName, passworD });
  }
  render() {

    return (
      <Formik
        render={props => <Login {...props} />}
        initialValues={{
          userName: '',
          passworD: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={this.submitValues}
      />
    );
  }
};

export default LoginForm;