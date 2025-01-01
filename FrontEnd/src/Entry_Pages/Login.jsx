import React,{useState} from 'react';
import './Login.css';
import image from './Logo.jpg';
import { Link ,useHistory  } from 'react-router-dom'; //THIS IS USED TO OVE THE PAGE WHEN THE ROUTE HAPPEN
import axios from 'axios';   //THIS IS FOR BRINGING THE DATA FROM DATABASE

const Login = () => {

    const [email,setemail] = useState('');  //THIS STATE IS USED TO GET GMAIL
    const [password,setpassword] = useState(''); //THIS STATE IS USED TO GET PASSWORD
    const history = useHistory(); //THIS IS USED TO MOVE THE PAHE FROM LOGIN TO HOME PAGE

    
    const handleLogin = (event) => {
        event.preventDefault();
    
        // Create an object with email and password
        const loginData = { email, password };
    
        if (email.trim() === '' || password.trim() === '') {
            alert('Please Enter the Required Data');
        } else {
            // Send a POST request to the backend
            axios.post('http://localhost:3000/login', loginData)
                .then((res) => {
                    if (res.data.message === "Success") {
                        console.log(res);
                        alert("Login Successfully");
                        history.push('/hom');
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
        <div id="Top_Div">
            <header className="logo-top-left">
                <img src={image} alt="Logo" title='Price_Loom' />
                
            </header>
            <h1 className="text-center text-dark display-5 fw-bold mb-4  animate__animated animate__fadeIn">
    Login
</h1>

            <div className="login-container">
                <div className="logo-inside">
                    <img src={image} alt="Logo Inside" title="Price_Loom" />
                </div>
                
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleLogin} className="form-group d-flex flex-column">
                        <label htmlFor="email" className="form-label">
                            User-Email
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter your E-mail"
                                onChange={(e)=> setemail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password" className="form-label">
                            Password
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your Password"
                                onChange={(e)=> setpassword(e.target.value)}
                            />
                        </label>
                        <button type="submit" className="btn btn-primary mt-3">
                            Login
                        </button>
                        <p className="text-center mt-3">
                            Don’t have an account?{' '}
                            <Link to="/register" className="register-link">
                                Register Here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
