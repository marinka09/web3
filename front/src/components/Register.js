import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import '../style/style.css'
import SideBar from "./SideBar";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Your order has been placed successfully!");
    };

    return (
        <div>
            <Header/>
            <main className="container mx-auto ">
                <SideBar/>
                <div className="content">
                    <div className="container w-100">
                        <h2>Registration Form</h2>
                        <form id="registration-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                    </div>
                    <div className="modal" id="success-modal">
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Registration successful!</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Register;
