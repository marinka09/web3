import React from 'react';
import Header from "./Header";
import '../style/style.css'
import Footer from "./Footer";
import SideBar from "./SideBar";

const Main = () => {

    return (
        < >
            <Header/>
            <main className="container mx-auto my-4">
                <div className="content-container">
                    <SideBar/>
                    <div className="content lab">
                        <p>Laboratory work #3</p>
                        <p>Maryna Kaliuzhna</p>
                        <p>KV-13</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Main;