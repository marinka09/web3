import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import '../style/style.css'
import SideBar from "./SideBar";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === "1111") {
            setLoginMessage("Logged in");
        } else {
            setLoginMessage("Incorrect password. Please try again.");
        }
    };

    return (
        <div>
            <Header/>
            <main className="container mx-auto ">
                <SideBar/>
                <div className="content w-100">
                    <div className="container w-100">
                        <h2>Login Form</h2>
                        <form id="login-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit">Login</button>
                            <p id="login-message" style={{ color: loginMessage.includes('Incorrect') ? 'red' : 'green' }}>
                                {loginMessage}
                            </p>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;
