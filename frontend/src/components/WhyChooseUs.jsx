
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

import restaurantData from "../data/restaurantData";
import "../styles/components/WhyChooseUs.css";

function WhyChooseUs() {

    const icons = [
        FaFireFlameCurved,
        FaLeaf,
        FaHeart,
        FaUtensils
    ];

    return (
        <section className="why-choose-us">

            <div className="container">

                {/* Section Header */}
                <div className="why-choose-us-header">

                    <p className="why-choose-us-eyebrow">
                        Why Choose Us
                    </p>

                    <h2 className="why-choose-us-title">
                        More than just a meal
                    </h2>

                </div>

                {/* Features */}
                <div className="why-choose-us-grid">

                    {restaurantData.features.map((feature, index) => {

                        const Icon = icons[index];

                        return (
                            <article
                                className="feature-card"
                                key={feature.id}
                            >

                                <div className="feature-icon">
                                    <Icon size={24} strokeWidth={1.7} />
                                </div>

                                <h3 className="feature-title">
                                    {feature.title}
                                </h3>

                                <p className="feature-description">
                                    {feature.description}
                                </p>

                            </article>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;