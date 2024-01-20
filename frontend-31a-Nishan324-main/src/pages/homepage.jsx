import React from 'react';
import '../css/home.css';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel"; // Make sure to replace 'style.css' with the actual path to your CSS file

function App() {
    return (
        <div>
            <header>
             <Navbar1></Navbar1>
             <Panel/>
            </header>

            <div className="hero-section">
                {/* Your hero section content */}
            </div>

            <div className="hero-message">
                <p>You are on Thrifty Tech. You can shop on Thrifty Tech with fast delivery. <a href="#">Click here to go to thriftytech.np</a></p>
            </div>

            <div className="shop-section">
                <div className="box1 box">
                    <div className="box-content">
                        <h2>Apple</h2>
                        {/*<div className="box-image" style="background-image: url('Apple.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>


                <div className="box2 box">
                    <div className="box-content">
                        <h2>Samsung</h2>
                        {/*<div className="box-image" style="background-image: url('samsung1.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="samsung.html" className="button">See more</a>
                        </div>
                    </div>
                </div>

                <div className="box3 box ">
                    <div className="box-content">
                        <h2>One Plus</h2>
                        {/*<div className="box-image2" style="background-image: url('oneplus1.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="oneplus.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box4 box ">
                    <div className="box-content">
                        <h2>Oppo</h2>
                        {/*<div className="box-image3" style="background-image: url('oppo1.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box1 box ">
                    <div className="box-content">
                        <h2>Vivo</h2>
                        {/*<div className="box-image4" style="background-image: url('vivo.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>

                    </div>
                </div>
                <div className="box2 box ">
                    <div className="box-content">
                        <h2>Nothing</h2>
                        {/*<div className="box-image5" style="background-image: url('Nothing.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box3 box ">
                    <div className="box-content">
                        <h2>Redmi</h2>
                        {/*<div className="box-image6" style="background-image: url('Redmi1.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box4 box ">
                    <div className="box-content">
                        <h2>Xiamoi</h2>
                        {/*<div className="box-image7" style="background-image: url('Xiamo.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box4 box ">
                    <div className="box-content">
                        <h2>Xiamoi</h2>
                        {/*<div className="box-image7" style="background-image: url('Xiamo.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box4 box ">
                    <div className="box-content">
                        <h2>Xiamoi</h2>
                        {/*<div className="box-image7" style="background-image: url('Xiamo.jpg');"></div>*/}
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-section2">
                <div className="box-container">
                    <div className="boxP">
                        {/* Content for .boxP */}
                    </div>
                    <div className="boxL">
                        {/* Content for .boxL */}
                    </div>
                </div>
            </div>

            <div className="shop-section3">
                <div className="box-container1">
                    <div className="boxW">
                        {/* Content for .boxW */}
                    </div>
                    <div className="boxT">
                        {/* Content for .boxT */}
                    </div>
                </div>
            </div>

     <Footer/>
        </div>
    );
}

export default App;
