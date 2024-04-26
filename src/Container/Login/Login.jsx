import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';

function Login(props) {
    const userSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: userSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (

        <div className="loginContainer">
            <form onSubmit={handleSubmit} className="formContainer">
                <h2 className="formTitle">Login Form</h2>
                <div>
                    <label className="label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        placeholder='Enter Username'
                        className="inputField"
                    />
                    {errors.username && touched.username && <div className="error">{errors.username}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder='Enter Password'
                        className="inputField"
                    />
                    {errors.password && touched.password && <div className="error">{errors.password}</div>}
                </div>
                <button type="submit" className="submitButton">Login</button>
                <Link to="/signup" className="signupLink">Signup</Link> {/* Use Link instead of anchor tag */}
            </form>
        </div>
    );
}

export default Login;
