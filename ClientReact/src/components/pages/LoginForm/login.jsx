import React from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Login = (props) => {

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
              <Paper id='paper' className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
                <h2 id='loginHeader' className='formItem'>Giriş Yap</h2>
                <form method='POST' onSubmit={handleSubmit} >
                  <div className="formItem">


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
                  <div className="formItem">


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
                  <div className="formItem ">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={!isValid}
                    >
                      GİRİŞ YAP
                  </Button>
                  </div>
                  <div className="formItem ">
                    <Link to='/register'>Üyeliğiniz yokmu kayıt olun</Link>
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
export default Login;