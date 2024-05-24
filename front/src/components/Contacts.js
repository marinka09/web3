import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import '../style/style.css'
import SideBar from "./SideBar";
const Contacts = () => {
    return (
        <div>
            <Header/>
            <main className="container mx-auto ">
                <SideBar/>
                <div className="content">
                    <p>
                        Support:<br/>
                        <br/>
                        Love_Bakery@gmail.com
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Contacts;
