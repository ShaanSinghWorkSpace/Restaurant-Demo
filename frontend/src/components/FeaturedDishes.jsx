import { FiArrowRight } from "react-icons/fi";
import restaurantData from "../data/restaurantData";
import "../styles/components/FeaturedDishes.css"
import { Link } from "react-router-dom";

function FeaturedDishes() {

    const featuredDishes = restaurantData.menu.filter(
        (dish) => dish.featured
    );

    return (
        <section className="featured-dishes" id="menu">

            <div className="container">

                {/* Section Header */}
                <div className="featured-dishes-header">

                    <div>
                        <p className="featured-dishes-eyebrow">
                            Our Favourites
                        </p>

                        <h2 className="featured-dishes-title">
                            A taste of what we do best
                        </h2>
                    </div>

                    <Link
                        to="menu"
                        className="featured-dishes-link"
                    >
                        View Full Menu
                        <FiArrowRight  size={18} />
                    </Link>

                </div>

                {/* Dish Cards */}
                <div className="featured-dishes-grid">

                    {featuredDishes.map((dish) => (
                        <article
                            className="dish-card"
                            key={dish.id}
                        >

                            {/* Image */}
                            <div className="dish-card-image-wrapper">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="dish-card-image"
                                />

                                {dish.featured && (
                                    <span className="dish-card-badge">
                                        Featured
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="dish-card-content">

                                <div className="dish-card-header">

                                    <h3 className="dish-card-name">
                                        {dish.name}
                                    </h3>

                                    <span className="dish-card-price">
                                        ₹{dish.price}
                                    </span>

                                </div>

                                <p className="dish-card-description">
                                    {dish.description}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default FeaturedDishes;