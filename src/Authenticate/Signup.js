import { css } from "aphrodite";
import { formField } from "../styles/AuthStyle";
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Signup({onSubmit, error}) {
    const [formData, setFormData] = useState({
        username: '',email: '', password: '', repassword: '', enableSubmit: false
    });

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

  
    useEffect(() => {
        if (formData.username !== '' && formData.password !== '' &&
            formData.email !== '' && formData.repassword !== '') {
            setFormData({ ...formData, enableSubmit: true});
        }
        else {
            if (formData.enableSubmit !== false) {
                setFormData({ ...formData, enableSubmit: false});
            }
        }
    }, [formData.username, formData.password, formData.repassword, formData.email, formData.enableSubmit]);

    return(
        <>
        <form
        autoComplete="off"
        onSubmit={handleSignupSubmit} className={css(formField.form)}>
        <p className={css(formField.para)}>SingUp Page</p>
        {error && <p>{error}</p>}
            <label htmlFor="username" className={css(formField.label)}>UserName
            </label>
                <input
                type='text'
                id='username'
                value={formData.username}
                name="username"
                onChange={handleChange}
                className={css(formField.input)}></input>
            <label htmlFor="email" className={css(formField.label)}>Email
            </label>
                <input
                type='email'
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                className={css(formField.input)}></input>
            <label htmlFor="password" className={css(formField.label)}>Password
            </label>
                <input
                type='password'
                id='password'
                value={formData.password}
                name="password"
                onChange={handleChange}
                className={css(formField.input)}></input>
            <label htmlFor="repassword" className={css(formField.label)}>ReEnter
            </label>
                <input
                type='password'
                id='repassword'
                value={formData.repassword}
                name="repassword"
                onChange={handleChange}
                className={css(formField.input)}></input>
                <input
                type='submit'
                value='SignUp'
                disabled={!formData.enableSubmit}
                className={css(formField.login)}></input>
        </form>
        </>
    );
}



export default Signup;
