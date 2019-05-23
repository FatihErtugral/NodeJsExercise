import React from "react";
import { TextField, Button, Paper } from '@material-ui/core';
import useForm from 'react-hook-form'
import { Link } from 'react-router-dom';

export const LoginForm = ({ login }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => login({ variables: { Email: data.Email, Password: data.Password } });

  return (
    <div className="outer">
      <div className="middle">
        <div className="inner">
          <div className="container">
            <div className="row justify-content-center">
              <Paper id='paper' className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12'>
                <h2 id='loginHeader' className='formItem'>Giriş Yap</h2>
                <form id="fatih" onSubmit={handleSubmit(onSubmit)}>

                  <div className="formItem">
                    <TextField
                      inputRef={register({
                        maxLength: { value: 20, message: 'Maximum 20 karakter olabilir.' },
                        minLength: { value: 3, message: 'Minimum 3 karakter olabilir.' },
                        required: 'Bu alan zorunludur'
                      })}
                      name="Email"
                      type="text"
                      label="Kullanıcı Adı"
                      error={!!errors.Email}
                      helperText={errors.Email && errors.Email.message}
                      required
                      fullWidth
                    />
                  </div>

                  <div className="formItem">
                    <TextField
                      inputRef={register({
                        maxLength: { value: 20, message: 'Maximum 20 karakter olabilir.' },
                        minLength: { value: 3, message: 'Minimum 3 karakter olabilir.' },
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                          message: 'En az sekiz karakter, en az bir harf, bir sayı ve bir özel karakter'
                        },
                        required: 'Bu alan zorunludur'
                      })}
                      name="Password"
                      id="Password"
                      type="Password"
                      label="Parola"
                      error={!!errors.Password}
                      helperText={errors.Password && errors.Password.message}
                      required
                      fullWidth
                    />
                  </div>

                  <div className="formItem ">
                    <Button type="submit" fullWidth variant="contained" color="primary">GİRİŞ YAP</Button>
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
