
import React from 'react';
import { TextField, Button, Paper} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../css/member.css';

const RegisterValidateSchema = Yup.object().shape({
  UserName: Yup.string()
    .min(3, 'Minimum 3 karakter olabilir.')
    .max(20, 'Maximum 20 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  Password: Yup.string()
    .max(25, '*')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'En az sekiz karakter, en az bir harf, bir sayı ve bir özel karakter')
    .required('Bu alan zorunludur.'),
  FirstName: Yup.string()
    .min(2, 'Minimum 2 karakter olabilir.')
    .max(35, 'Maximum 35 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  LastName: Yup.string()
    .min(2, 'Minimum 2 karakter olabilir.')
    .max(35, 'Maximum 35 karakter olabilir.')
    .required('Bu alan zorunludur.'),
  Email: Yup.string()
    .email('Geçersiz e-posta')
    .required('Bu alan zorunludur.'),
});

const RegisterValid = ({ handleSubmit }) => {
  const submitValues = ({ UserName, Password, FirstName, LastName, Email }) => {
    return handleSubmit({ variables: { UserName, Password, FirstName, LastName, Email } });
  }
  return (
    <Formik
      render={props => <RegisterForm {...props} />}
      initialValues={{
        UserName: '',
        Password: '',
        FirstName: '',
        LastName: '',
        Email: '',
      }}
      validationSchema={RegisterValidateSchema}
      onSubmit={submitValues}
    />
  );
};

const RegisterForm = (props) => {

const {
  errors,
  touched,
  handleSubmit,
  handleChange,
  isValid,
  setFieldTouched,
} = props;

const change = (name, e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
};

return (
  <div className="outer">
    <div className="middle">
      <div className="inner">
        <div className="container">
          <div className="row justify-content-center">
            <Paper id='paper' className='col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12'>
              <h2 id='loginHeader' className='formItem'>Kayıt Ol</h2>
              <form method='POST' onSubmit={handleSubmit} className='container'>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-12 formItem">
                    <TextField
                      name="UserName"
                      id="user_name"
                      type="text"
                      label="Kullanıcı Adı"
                      helperText={errors.UserName && touched.UserName ? (<i>{errors.UserName}</i>) : null}
                      error={touched.UserName && Boolean(errors.UserName)}
                      onChange={change.bind(null, "UserName")}
                      fullWidth
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12 formItem">
                    <TextField
                      name="Password"
                      id="password"
                      type="password"
                      label="Parola"
                      helperText={errors.Password && touched.Password ? (<i>{errors.Password}</i>) : null}
                      error={touched.Password && Boolean(errors.Password)}
                      onChange={change.bind(null, "Password")}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-12 formItem">
                    <TextField
                      name="FirstName"
                      id="first_name"
                      type="text"
                      label="İsim"
                      helperText={errors.FirstName && touched.FirstName ? (<i>{errors.FirstName}</i>) : null}
                      error={touched.FirstName && Boolean(errors.FirstName)}
                      onChange={change.bind(null, "FirstName")}
                      fullWidth
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12 formItem">
                    <TextField
                      name="LastName"
                      id="last_name"
                      type="text"
                      label="Soyisim"
                      helperText={errors.LastName && touched.LastName ? (<i>{errors.LastName}</i>) : null}
                      error={touched.LastName && Boolean(errors.LastName)}
                      onChange={change.bind(null, "LastName")}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 formItem">
                    <TextField
                      name="Email"
                      id="Email"
                      type="Email"
                      label="Email"
                      helperText={errors.Email && touched.Email ? <i>{errors.Email}</i> : null}
                      error={touched.Email && Boolean(errors.Email)}
                      onChange={change.bind(null, "Email")}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-6 formItem">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={!isValid}
                    >
                      KAYIT OL
                </Button>
                  </div>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default RegisterValid;