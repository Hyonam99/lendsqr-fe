import React from "react";
import Logo from "../../components/Logo";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";


// const validate = values => {
//   const errors = {};
//   const checkMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
//   const checkPassword = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!checkMail.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
  
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (!checkPassword.test(values.password)) {
//     errors.password = `Must be 8 characters or more`;
//   }
//   return errors;
// };

const LoginForm = () => {

  const [hidePassword, setHidePassword] = useState(true)
  const [showText, setshowText] = useState(true)

  const navigate = useNavigate()
  const formik = useFormik({
  
    initialValues: { email: "", password: "" },
    
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),

      password: Yup.string()
  .required('No password provided.') 
  .matches(/^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,24}$/, 'Password should contain minimum of 8 Alphanumeric characters and a symbol (~!@#$%^&*()+=).')
       
    }),

    onSubmit: (values) => {
      navigate('/Admin', {state:{values}})
    },
  });

  return (
    <section className="login-form-main-section">
      <div className="logo-form">
        <Logo />
      </div>

      <div className="login-form-welcome">
        <h3> WELCOME !</h3>
        <p> Enter details to login </p>

        <div className="login-form-section">

          <form onSubmit={formik.handleSubmit}>

            <div className="form-input-holder" >
              {/* <label htmlFor="email">Email Address</label> */}
                <input
                  id="email"
                  className="email-address-input"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              {formik.errors.email ? <small>{formik.errors.email}</small> : null}
            </div>


            <div className="form-input-holder">
             
              {/* <label htmlFor="password">Password</label> */}
                <input
                  id="password"
                  className="password-input"
                  name="password"
                  type={hidePassword ? 'password' : 'text'}
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <span className="toogle-password" >
                { showText ? <Link onClick={() => {setHidePassword(false); setshowText(false)}}>Show</Link> :
                  <Link onClick={() => {setHidePassword(true); setshowText(true)}}>Hide</Link> }
                </span>
                
              {formik.errors.password ? <small>{formik.errors.password}</small> : null}
            </div>

            <span className="forgot-password" >
              <Link>Forgot password ?</Link>
            </span>
            <button type="submit">LOG IN</button>

          </form>

        </div>
      </div>

      <div className="login-form-getHelp-holder">
      <span className="login-form-getHelp">
        <h4>Help</h4>
        </span>
      </div>
    </section>
  );
};

export default LoginForm;
