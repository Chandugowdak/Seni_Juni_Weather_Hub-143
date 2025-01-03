import React, { useState } from 'react';
import './Login.css';
import image from './Login_Image.webp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FaEnvelope , FaLock} from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const loginData = { email, password };

        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter the required data');
        } else {
            axios.post('http://localhost:3000/login', loginData)
                .then((res) => {
                    if (res.data.message === "Success") {
                        alert("Login Successfully");
                        navigate('/home');
                    } else if (res.data.message === "Invalid Password") {
                        alert("Invalid Username or Password");
                    } else {
                        alert("Unexpected error. Please try again.");
                    }
                })
                .catch((err) => {
                    console.error("Error: ", err);
                    alert("An error occurred during login");
                });
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
          
            <div className="row justify-content-center w-100">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg border-0 p-4">
                        <div className="text-center mb-4">
                            <img 
                                src={image} 
                                alt="Logo" 
                                className="img-fluid rounded-circle" 
                                style={{ width: '80px', height: '80px' }} 
                                title="𝓢𝓮𝓷𝓲_𝓙𝓾𝓷𝓲_𝓦𝓮𝓪𝓽𝓱𝓮𝓻_𝓗𝓾𝓫" 
                            />
                        </div>
                        <h2 className="text-center text-primary fw-bold mb-4">𝑳𝒐𝒈𝒊𝒏</h2>
                        <form onSubmit={handleLogin}>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="email" className='text-primary-emphasis'><FaEnvelope /> Email Address  </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="password" className='text-primary-emphasis' ><FaLock /> Password</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fw-bold">𝑳𝒐𝒈𝒊𝒏</button>
                        </form>
                        <p className="text-center mt-3 fw-bold">
                            Don’t have an account?{' '}
                            <Link to="/register" className="text-decoration-none text-primary">
                                Register Here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
