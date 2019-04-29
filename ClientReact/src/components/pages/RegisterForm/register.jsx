import React from 'react';
import { TextField, Button, Paper} from '@material-ui/core';

const Register = (props) => {

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
                        name="userName"
                        id="user_name"
                        type="text"
                        label="Kullanıcı Adı"
                        helperText={errors.userName && touched.userName ? (<i>{errors.userName}</i>) : null}
                        error={touched.userName && Boolean(errors.userName)}
                        onChange={change.bind(null, "userName")}
                        fullWidth
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 formItem">
                      <TextField
                        name="passworD"
                        id="password"
                        type="password"
                        label="Parola"
                        helperText={errors.passworD && touched.passworD ? (<i>{errors.passworD}</i>) : null}
                        error={touched.passworD && Boolean(errors.passworD)}
                        onChange={change.bind(null, "passworD")}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12 formItem">
                      <TextField
                        name="firstName"
                        id="first_name"
                        type="text"
                        label="İsim"
                        helperText={errors.firstName && touched.firstName ? (<i>{errors.firstName}</i>) : null}
                        error={touched.firstName && Boolean(errors.firstName)}
                        onChange={change.bind(null, "firstName")}
                        fullWidth
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 formItem">
                      <TextField
                        name="lastName"
                        id="last_name"
                        type="text"
                        label="Soyisim"
                        helperText={errors.lastName && touched.lastName ? (<i>{errors.lastName}</i>) : null}
                        error={touched.lastName && Boolean(errors.lastName)}
                        onChange={change.bind(null, "lastName")}
                        fullWidth
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 formItem">
                      <TextField
                        name="email"
                        id="email"
                        type="email"
                        label="Email"
                        helperText={errors.email && touched.email ? <i>{errors.email}</i> : null}
                        error={touched.email && Boolean(errors.email)}
                        onChange={change.bind(null, "email")}
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
export default Register;