import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import restaurantData from "../data/restaurantData";
import "../styles/components/MenuPreview.css";

function MenuPreview() {
    const categories = [
        "Starters",
        "Main Course",
        "Breads",
        "Desserts"
    ];

    const [activeCategory, setActiveCategory] =
        useState("Starters");

    const previewDishes = restaurantData.menu.filter(
        (dish) => dish.category === activeCategory
    );

    return (
        <section
            className="menu-preview"
            id="menu-preview"
        >

            <div className="container">

                {/* =========================
                    SECTION HEADER
                ========================= */}

                <header className="menu-preview-header">

                    <p className="menu-preview-eyebrow">
                        Our Menu
                    </p>

                    <h2 className="menu-preview-title">
                        A glimpse of our kitchen
                    </h2>

                </header>


                {/* =========================
                    CATEGORIES
                ========================= */}

                <div
                    className="menu-preview-categories"
                    role="tablist"
                    aria-label="Menu categories"
                >

                    {categories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            role="tab"
                            aria-selected={
                                activeCategory === category
                            }
                            className={`menu-category ${
                                activeCategory === category
                                    ? "menu-category-active"
                                    : ""
                            }`}
                            onClick={() =>
                                setActiveCategory(category)
                            }
                        >
                            {category}
                        </button>
                    ))}

                </div>


                {/* =========================
                    DISHES
                ========================= */}

                <div
                    className="menu-preview-list"
                    key={activeCategory}
                >

                    {previewDishes.length > 0 ? (
                        previewDishes.map((dish) => (
                            <article
                                className="menu-preview-item"
                                key={dish.id}
                            >

                                <div className="menu-preview-item-content">

                                    <h3 className="menu-preview-item-name">
                                        {dish.name}
                                    </h3>

                                    <p className="menu-preview-item-description">
                                        {dish.description}
                                    </p>

                                </div>

                                <span className="menu-preview-item-price">
                                    ₹{dish.price}
                                </span>

                            </article>
                        ))
                    ) : (
                        <p className="menu-preview-empty">
                            No dishes available in this category.
                        </p>
                    )}

                </div>


                {/* =========================
                    CTA
                ========================= */}

                <div className="menu-preview-footer">

                    <Link
                        to="/menu"
                        className="menu-preview-cta"
                    >
                        View Full Menu

                        <FiArrowRight size={18} />

                    </Link>

                </div>

            </div>

        </section>
    );
}

export default MenuPreview;