import React, { useState } from 'react';
import "./styles/styles.css"
import WavesImg from '../assets/Images/waves.png';
import Input, { PasswordInput } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    

    const handleLogin = async (e) => {
        try {
            const response = await axios.post('http://localhost:4040/login', {
                email,
                password
            });
    
            const { success, token } = response.data;
    
            if (success) {
                localStorage.setItem('token', token);
                navigate('/taskmanager');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };
    

    return (
        <div className="loginPage">
            <div className="loginCard">
                <img className="wavesImg" src={WavesImg} alt="WavesImage" />
                <h1 className="loginTitle">Login</h1>
                <form className="loginForm">
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                    <PasswordInput
                        id="password"
                        value={password}
                        placeholder="Password"
                        isVisible={showPassword}
                        onChange={e => { setPassword(e.target.value) }}
                        toggleVisibility={togglePasswordVisibility}
                    />
                    <Button
                        className="loginSubmitBtn"
                        type="button"
                        value="Login"
                        btnName="login"
                        onClick={handleLogin}
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;