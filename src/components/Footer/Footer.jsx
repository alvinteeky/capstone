import React from "react";
import { images } from "../../constants";
import { AppWrap } from '../../wrapper';
import './Footer.css';

const doormatNavigation = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
const contact = ["Adress", "phone number", "email"];
const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"];

const FooterItems = (props) => {
    return (<div className="footer-items" id="footer">
        <h1 className="footer-item-title">{props.sectionName}</h1>
        <ul className="footer-item-names">
            {
                props.sectionList.map((item) => {
                    return (<li key={item}>
                        <a href={`#${item}`}>{item}</a>
                    </li>);
                })
            }
        </ul>
        
    </div>);
};

const Footer = () => {
    return (<footer className="footer-section">
            <div className="about-image-box img-box-1"
                style= 
                {
                    {
                        backgroundImage: `url(${images.resturant})`
                    }
                }
            />
        <FooterItems sectionName="Doormat Navigation" sectionList={doormatNavigation} />
        <FooterItems sectionName="Contact" sectionList={contact} />
        <FooterItems sectionName="Social Media" sectionList={socialMedia} />
    </footer>);
}

export default AppWrap(Footer, 'footer', 'footer');