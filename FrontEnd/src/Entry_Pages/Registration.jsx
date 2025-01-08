import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Icon imports
import './Registration.css'; // Import custom CSS
import image from './Login_Image.webp';
import axios from 'axios'; // Import axios for API requests

const Registration = () => { 
    const [username, setusername] = useState(''); // State variables for username
    const [email, setemail] = useState('');       // State variables for email 
    const [password, setpassword] = useState('');  // State variables for password
  
    const history = useNavigate(); // Use history to navigate to different pages

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', { username, email, password })
            .then((data) => {
                console.log(data);
                history('/login'); // This will navigate to login page 
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100" id="Main_Continer">
            <div className="row justify-content-center w-100">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-lg p-4 m-4 rounded-lg border-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img 
                                src={image} 
                                alt="Logo" 
                                className="img-fluid rounded-circle" 
                                style={{ width: '60px', height: '60px' }} 
                                title="𝓢𝓮𝓷𝓲_𝓙𝓾𝓷𝓲_𝓦𝓮𝓪𝓽𝓱𝓮𝓻_𝓗𝓾𝓫" 
                            />
                        </div>
                        
                        <div className="text-center mb-4">
                            <h2 className="text-primary fw-bold">𝑪𝒓𝒆𝒂𝒕𝒆 𝒂𝒏 𝑨𝒄𝒄𝒐𝒖𝒏𝒕</h2>
                        </div>

                        <form onSubmit={handlesubmit}>
                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="username"
                                    placeholder="Username"
                                    onChange={(e) => setusername(e.target.value)}
                                    required
                                />
                                <label htmlFor="username" className='text-dark'><FaUser /> Username</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="email"
                                    placeholder="Email address"
                                    onChange={(e) => setemail(e.target.value)}
                                    required
                                />
                                <label htmlFor="email" className='text-dark'><FaEnvelope /> Email address</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) => setpassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="password" className='text-dark'><FaLock /> Password</label>
                            </div>

                            <div className="text-center">
                                <button type="submit" id="Login_btn" className="btn btn-primary btn-lg w-100 mt-3">
                                    Register
                                </button>
                            </div>
                        </form>

                        <p className="text-center mt-4 fw-bold">
                            Already have an account?{' '}
                            <Link to="/login" className="text-success fw-bold">Login Here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
