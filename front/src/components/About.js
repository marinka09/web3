import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "../style/style.css";
import img1 from "../img/Paris de Brest.jpg";
import img2 from "../img/coco.jpg";
import img3 from "../img/raspberry.jpg";

const About = () => {
    const [showModal, setShowModal] = useState(true);


    return (
        <div>
            <Header />
            <main className="container"
                  style={{display: 'flex', justifyContent: 'center', marginLeft: '450px'}}>
                <div className="content">
                    {showModal && (
                        <div className="modal fade show" style={{display: 'block'}}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div>
                                        <span style={{ marginLeft: 'auto' }} className="close" onClick={() => setShowModal(false)} aria-hidden="true">
                                           &times;
                                        </span>
                                    </div>
                                    <div className="modal-body">
                                        <h5 className="modal-title">Special Discount!</h5>
                                        <p>Visit Love_Bakery now and get 10% off on all items!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="menu" style={{display: 'flex'}}>
                        <img src={img1} alt=""/>
                        <img src={img2} alt=""/>
                        <img src={img3} alt=""/>
                    </div>

                    <br/>
                    <p className="AboutUS">
                        Welcome to Love_Bakery, where every corner is crafted with a
                        sprinkle of magic and a dollop of affection! Nestled in the heart of
                        the city, our charming little bakery is a place for those with a
                        sweet tooth and a longing for warmth.<br/>
                        <br/>

                        As you step through our door, you're greeted by the heavenly scent
                        of freshly baked delights, swirling around like a comforting hug.
                        Soft melodies dance in the air, inviting you to a journey of
                        indulgence and joy. Our cozy interior is adorned with whimsical
                        decor, where vintage charm meets modern allure. From the quaint
                        floral wallpaper to the rustic wooden tables, every corner of Love
                        Bakery whispers tales of love and happiness.<br/>
                        <br/>
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default About;
