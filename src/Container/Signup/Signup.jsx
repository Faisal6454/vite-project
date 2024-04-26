import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import './Signup.css';
import { Link } from 'react-router-dom'; 

function Signup(props) {
    const signupSchema = Yup.object().shape({
        name: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: signupSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;
    return (
        <div className="signupContainer">
            <form onSubmit={handleSubmit} className="formContainer">
                <h2 className="formTitle">Signup Form</h2>
                <div>
                    <label htmlFor="name" className="signupLabel">Username:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder='Enter name'
                        className="signupInputField"
                    />
                    {errors.name && touched.name && <div className="signupError">{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email" className="signupLabel">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Enter Email'
                        className="signupInputField"
                    />
                    {errors.email && touched.email && <div className="signupError">{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password" className="signupLabel">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder='Enter Password'
                        className="signupInputField"
                    />
                    {errors.password && touched.password && <div className="signupError">{errors.password}</div>}
                </div>
                <div>
                    <label htmlFor="password" className="signupLabel">Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder='Enter Password Again'
                        className="signupInputField"
                    />
                    {errors.confirmPassword && touched.confirmPassword && <div className="signupError">{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className="signupSubmitButton">Signup</button>
                <Link to="/" className="signupLink"> Already have an account? Login</Link>
            </form>
        </div>
    );
}

export default Signup;
