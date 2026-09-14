import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import restaurantData from "../data/restaurantData";
import "../styles/components/About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="container about-container">

                {/* Image */}
                <div className="about-image-wrapper">
                    <img
                        src={restaurantData.gallery[0].image}
                        alt={restaurantData.gallery[0].alt}
                        className="about-image"
                    />
                </div>

                {/* Content */}
                <div className="about-content">

                    <p className="about-eyebrow">
                        Restaurant Story
                    </p>

                    <h2 className="about-title">
                        A table built around tradition and craft
                    </h2>

                    <div className="about-text">

                        <p>
                            {restaurantData.description}
                        </p>

                        <p>
                            We believe great food is about more than
                            ingredients. It is about the people,
                            traditions and moments that bring everyone
                            around the same table.
                        </p>

                    </div>

                    <Link
                        to="/about"
                        className="about-link"
                    >
                        Our Story
                        <FiArrowRight  size={18} />
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default About;