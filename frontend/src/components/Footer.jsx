import {
    FiPhone,
    FiMessageCircle
} from "react-icons/fi";

import {
    FaInstagram,
    FaFacebookF
} from "react-icons/fa";

import { Link } from "react-router-dom";

import restaurantData from "../data/restaurantData";
import "../styles/components/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-main">

                    {/* =========================
                        Brand
                    ========================= */}

                    <div className="footer-brand">

                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            {restaurantData.name}
                        </Link>

                        <p className="footer-description">
                            {restaurantData.description}
                        </p>

                        <div className="footer-socials">

                            {/* Instagram */}

                            <a
                                href={
                                    restaurantData.socialLinks.instagram
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="footer-social"
                            >
                                <FaInstagram size={20} />
                            </a>


                            {/* Facebook */}

                            <a
                                href={
                                    restaurantData.socialLinks.facebook
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="footer-social"
                            >
                                <FaFacebookF size={19} />
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        Navigation
                    ========================= */}

                    <div className="footer-column">

                        <h3 className="footer-heading">
                            Navigation
                        </h3>

                        <nav className="footer-links">

                            <Link to="/">
                                Home
                            </Link>

                            <Link to="/menu">
                                Menu
                            </Link>

                            <Link to="/about">
                                Our Story
                            </Link>

                            <Link to="/gallery">
                                Gallery
                            </Link>

                            <Link to="/contact">
                                Reviews
                            </Link>

                            <Link to="/contact">
                                Reservations
                            </Link>

                        </nav>

                    </div>


                    {/* =========================
                        Contact
                    ========================= */}

                    <div className="footer-column">

                        <h3 className="footer-heading">
                            Contact
                        </h3>

                        <div className="footer-contact">

                            <p>
                                {restaurantData.contact.address}
                            </p>

                            <a
                                href={`tel:${restaurantData.contact.phone}`}
                            >
                                {restaurantData.contact.phone}
                            </a>

                            <a
                                href={`mailto:${restaurantData.contact.email}`}
                            >
                                {restaurantData.contact.email}
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        Hours
                    ========================= */}

                    <div className="footer-column">

                        <h3 className="footer-heading">
                            Opening Hours
                        </h3>

                        <div className="footer-hours">

                            {restaurantData.openingHours.map((day) => (
                                <div
                                    className="footer-hours-row"
                                    key={day.day}
                                >

                                    <span>
                                        {day.day}
                                    </span>

                                    <span>
                                        {day.hours}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>


                {/* =========================
                    Bottom
                ========================= */}

                <div className="footer-bottom">

                    <p>
                        © {currentYear}{" "}
                        {restaurantData.name}.
                        All rights reserved.
                    </p>

                    <div className="footer-actions">

                        {/* Call */}

                        <a
                            href={`tel:${restaurantData.contact.phone}`}
                            className="footer-action"
                            aria-label="Call restaurant"
                        >
                            <FiPhone size={17} />

                            <span>
                                Call
                            </span>
                        </a>


                        {/* WhatsApp */}

                        <a
                            href={`https://wa.me/${restaurantData.contact.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-action"
                            aria-label="WhatsApp restaurant"
                        >
                            <FiMessageCircle size={17} />

                            <span>
                                WhatsApp
                            </span>
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;