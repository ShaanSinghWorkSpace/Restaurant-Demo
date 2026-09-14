import restaurantData from "../data/restaurantData";
import "../styles/pages/About.css";

function About() {
    return (
        <section className="about-page">
            <div className="container">

                {/* Page Header */}
                <div className="about-page-header">
                    <p className="about-page-eyebrow">
                        Our Story
                    </p>

                    <h1 className="about-page-title">
                        A table built around tradition and craft
                    </h1>

                    <p className="about-page-intro">
                        At {restaurantData.name}, we believe great food
                        brings people together. Our approach combines the
                        depth of Indian culinary traditions with a modern
                        perspective.
                    </p>
                </div>

                {/* Story */}
                <div className="about-page-story">

                    <div className="about-page-image-wrapper">
                        <img
                            src={restaurantData.gallery[0].image}
                            alt={restaurantData.gallery[0].alt}
                            className="about-page-image"
                        />
                    </div>

                    <div className="about-page-content">

                        <p className="about-page-label">
                            The Ember & Spice Philosophy
                        </p>

                        <h2>
                            Rooted in tradition.
                            <br />
                            Created for today.
                        </h2>

                        <p>
                            Our kitchen is inspired by the rich culinary
                            heritage of India. We take familiar flavours,
                            traditional techniques and carefully selected
                            ingredients, then bring them together in a
                            contemporary dining experience.
                        </p>

                        <p>
                            Every dish is prepared with intention, from the
                            balance of spices to the final presentation.
                            We believe that food should feel familiar while
                            still giving you something new to discover.
                        </p>

                        <p>
                            From our kitchen to your table, every detail is
                            guided by our commitment to flavour, hospitality
                            and craftsmanship.
                        </p>

                    </div>

                </div>

                {/* Philosophy */}
                <div className="about-page-philosophy">

                    <div className="about-philosophy-header">
                        <p className="about-page-label">
                            What We Believe
                        </p>

                        <h2>
                            More than a meal.
                            <br />
                            An experience.
                        </h2>
                    </div>

                    <div className="about-philosophy-grid">

                        {restaurantData.features.map((feature) => (
                            <div
                                className="about-philosophy-item"
                                key={feature.id}
                            >
                                <h3>
                                    {feature.title}
                                </h3>

                                <p>
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;