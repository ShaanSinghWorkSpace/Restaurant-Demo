import { useState } from "react";

import restaurantData from "../data/restaurantData";
import "../styles/pages/Menu.css";

function Menu() {
    const categories = [
        "All",
        "Starters",
        "Main Course",
        "Breads",
        "Desserts"
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDishes = restaurantData.menu.filter((dish) => {
        const matchesCategory =
            activeCategory === "All" ||
            dish.category === activeCategory;

        const matchesSearch =
            dish.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            dish.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <section className="menu-page">

            <div className="container">

                {/* Page Header */}
                <div className="menu-page-header">

                    <p className="menu-page-eyebrow">
                        Our Menu
                    </p>

                    <h1 className="menu-page-title">
                        Crafted with flavour and tradition
                    </h1>

                    <p className="menu-page-description">
                        Explore our selection of modern Indian dishes,
                        prepared with carefully selected ingredients and
                        bold, authentic flavours.
                    </p>

                </div>


                {/* Categories */}
                <div className="menu-categories">

                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            className={`menu-category-button ${
                                activeCategory === category
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}

                </div>


                {/* Search */}
                <div className="menu-search">

                    <input
                        type="text"
                        placeholder="Search dishes..."
                        value={searchQuery}
                        onChange={(event) =>
                            setSearchQuery(event.target.value)
                        }
                        aria-label="Search dishes"
                    />

                </div>


                {/* Menu Grid */}
                <div className="menu-page-grid">

                    {filteredDishes.map((dish) => (
                        <article
                            className="menu-page-card"
                            key={dish.id}
                        >

                            {/* Image */}
                            <div className="menu-page-image-wrapper">

                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="menu-page-image"
                                    loading="lazy"
                                />

                                {dish.featured && (
                                    <span className="menu-featured-badge">
                                        Featured
                                    </span>
                                )}

                            </div>


                            {/* Content */}
                            <div className="menu-page-card-content">

                                <div className="menu-page-card-top">

                                    <h2 className="menu-page-dish-name">
                                        {dish.name}
                                    </h2>

                                    <span
                                        className={`food-type-indicator ${
                                            dish.vegetarian
                                                ? "vegetarian"
                                                : "non-vegetarian"
                                        }`}
                                        title={
                                            dish.vegetarian
                                                ? "Vegetarian"
                                                : "Non-vegetarian"
                                        }
                                        aria-label={
                                            dish.vegetarian
                                                ? "Vegetarian"
                                                : "Non-vegetarian"
                                        }
                                    >
                                        <span className="food-type-dot"></span>
                                    </span>

                                </div>

                                <p className="menu-page-dish-description">
                                    {dish.description}
                                </p>

                                <p className="menu-page-dish-price">
                                    ₹{dish.price}
                                </p>

                            </div>

                        </article>
                    ))}

                </div>


                {/* Empty State */}
                {filteredDishes.length === 0 && (
                    <div className="menu-empty">
                        <p>
                            No dishes found in this category.
                        </p>
                    </div>
                )}

            </div>

        </section>
    );
}

export default Menu;