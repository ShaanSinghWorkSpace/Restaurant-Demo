import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import restaurantData from "../data/restaurantData";
import "../styles/components/Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">

                {/* Hero Content */}
                <div className="hero-content">

                    <p className="hero-eyebrow">
                        {restaurantData.cuisine}
                    </p>

                    <h1 className="hero-title">
                        {restaurantData.tagline}
                    </h1>

                    <p className="hero-description">
                        {restaurantData.description}
                    </p>

                    <div className="hero-actions">

                        <Link
                            to="/menu"
                            className="hero-button hero-button-primary"
                        >
                            View Menu
                            <FiArrowRight size={18} />
                        </Link>

                        <Link
                            to="/contact"
                            className="hero-button hero-button-secondary"
                        >
                            Book a Table
                        </Link>

                    </div>
                </div>

                {/* Hero Image */}
                <div className="hero-image-wrapper">
                    <img
                        src={restaurantData.heroImage}
                        alt={`${restaurantData.name} restaurant`}
                        className="hero-image"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;