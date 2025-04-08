import React, { useState } from 'react';
import styled from 'styled-components';
import Orb from '../Orb/Orb';


function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy authentication logic
        if (email === 'abc@gmail.com' && password === 'abc') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <LoginStyled>
            <Orb/>
            <div className="login-container">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </LoginStyled>
    );
}

// Styled component for the Login page
const LoginStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(252, 246, 249, 0.78);
    position: relative;
    overflow: hidden; /* Ensure orb doesn't overflow */

    .login-container {
        position: relative; /* Relative positioning for correct z-index layering */
        width: 400px;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        padding: 2rem;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.1);
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        z-index: 2; /* Ensure form is above the orb */

        h2 {
            color: rgba(34, 34, 96, 1);
        }

        input {
            width: 100%;
            padding: 0.8rem;
            border-radius: 10px;
            border: 1px solid rgba(34, 34, 96, 0.2);
            outline: none;
            background: white;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease-in-out;
            margin-bottom: 1rem;

            &:focus {
                border-color: rgba(34, 34, 96, 1);
            }
        }

        button {
            width: 100%;
            padding: 0.8rem;
            border-radius: 10px;
            border: none;
            background-color: #222260;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #1d1a57;
            }
        }
    }
`;

export default Login;
