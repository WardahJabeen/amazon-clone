import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (event) => {
        event.preventDefault(); //stops refreshing the page
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // User signed in 
            console.log('User signed in:', userCredential.user);
            // redirect to homepage
            navigate('/');
        } catch (error) {
            alert(error.message);
            console.error('Error signing in:', error.message);
        }
    };

    const register = async (event) => {
        event.preventDefault(); //stops refreshing the page
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // User signed in 
            console.log('User signed in:', userCredential.user);
            // redirect to homepage
            navigate('/');
        } catch (error) {
            alert(error.message);
            console.error('Error signing in:', error.message);
        }
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>

            <div className='container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />

                    {/* <button type='submit' onClick={signIn} className='login-signInButton'>Sign In</button> */}
                    <button type='submit' className='signInButton' onClick={login}>Sign In</button>

                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='registerButton' onClick={register}>Create your Amazon Account</button>

                {/* <button onClick={register} className='login-registerButton'>Create your Amazon Account</button> */}

            </div>

        </div>
    )
}

export default Login
