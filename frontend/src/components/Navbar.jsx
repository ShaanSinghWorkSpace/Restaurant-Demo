import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

import restaurantData from "../data/restaurantData";
import "../styles/components/Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="container navbar-container">

                {/* Logo */}
                <Link
    to="/"
    className="navbar-brand"
    onClick={closeMenu}
>
    <img
        src={restaurantData.logo}
        alt={restaurantData.name}
    />
    <span>{restaurantData.name}</span>
</Link>

                {/* Desktop Navigation */}
                <nav className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <Link
                    to="/contact"
                    className="navbar-cta"
                >
                    Book a Table
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-menu-button"
                    onClick={toggleMenu}
                    aria-label={
                        isMenuOpen
                            ? "Close menu"
                            : "Open menu"
                    }
                    aria-expanded={isMenuOpen}
                >
{isMenuOpen
    ? <FiX size={24} />
    : <FiMenu size={24} />}
                </button>

            </div>

            {/* Mobile Navigation */}
            <div
                className={`navbar-mobile ${
                    isMenuOpen
                        ? "navbar-mobile-open"
                        : ""
                }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        onClick={closeMenu}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    to="/contact"
                    className="navbar-mobile-cta"
                    onClick={closeMenu}
                >
                    Book a Table
                </Link>
            </div>
        </header>
    );
}

export default Navbar;