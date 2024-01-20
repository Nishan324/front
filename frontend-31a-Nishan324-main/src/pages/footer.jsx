
import logoImage from '../images/pop.png'
import React from 'react';
// import 'C://Users//hp//Desktop//webapiassigmrnt//frontend-31a-Nishan324//src//css//footer.css'
import 'font-awesome/css/font-awesome.min.css';
import "../css/footer.css"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (

        <footer className="footer-distributed">

            <div className="footer-left">
                <img src={logoImage} alt="Company Logo" />
                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>
                <p className="footer-company-name">Thrifty Tech © 2023</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Dilibazar,PipalBot</span> Kathmandu, Nepal</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+977 9827904325</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">thriftytech@company.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <h2>About the company</h2>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>

            </div>
            <div className="foot-panel12" onClick={scrollToTop}>
                Back to Top
            </div>
        </footer>
    );
}

export default Footer;