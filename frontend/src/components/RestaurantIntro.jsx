import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import restaurantData from "../data/restaurantData";
import "../styles/components/RestaurantIntro.css";

function RestaurantIntro() {
    return (
        <section className="restaurant-intro">
            <div className="container restaurant-intro-container">

                {/* Section Label */}
                <p className="restaurant-intro-eyebrow">
                    Our Story
                </p>

                {/* Main Content */}
                <div className="restaurant-intro-content">

                    <h2 className="restaurant-intro-title">
                        A modern take on Indian dining
                    </h2>

                    <div className="restaurant-intro-text">
                        <p>
                            {restaurantData.description}
                        </p>

                        <p>
                            At {restaurantData.name}, we bring together
                            traditional Indian flavours, thoughtful
                            presentation and a warm dining experience.
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <Link
    to="/about"
    className="restaurant-intro-link"
>
    Discover Our Story
    <FiArrowRight size={18} />
</Link>

            </div>
        </section>
    );
}

export default RestaurantIntro;