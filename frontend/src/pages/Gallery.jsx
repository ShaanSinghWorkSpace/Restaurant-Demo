
import { useEffect, useState } from "react";
import {
    X,
    ArrowLeft,
    ArrowRight
} from "lucide-react";

import restaurantData from "../data/restaurantData";
import "../styles/pages/Gallery.css";

function Gallery() {
    const categories = [
        "All",
        "Food",
        "Ambience"
    ];

    const [activeCategory, setActiveCategory] =
        useState("All");

    const [selectedImage, setSelectedImage] =
        useState(null);

    const filteredImages =
        activeCategory === "All"
            ? restaurantData.gallery
            : restaurantData.gallery.filter(
                  (item) =>
                      item.category === activeCategory
              );

    /* =========================
       NEXT IMAGE
    ========================= */

    const showNextImage = () => {
        if (!selectedImage) {
            return;
        }

        const currentIndex =
            filteredImages.findIndex(
                (item) =>
                    item.id === selectedImage.id
            );

        const nextIndex =
            (currentIndex + 1) %
            filteredImages.length;

        setSelectedImage(
            filteredImages[nextIndex]
        );
    };

    /* =========================
       PREVIOUS IMAGE
    ========================= */

    const showPreviousImage = () => {
        if (!selectedImage) {
            return;
        }

        const currentIndex =
            filteredImages.findIndex(
                (item) =>
                    item.id === selectedImage.id
            );

        const previousIndex =
            (currentIndex - 1 +
                filteredImages.length) %
            filteredImages.length;

        setSelectedImage(
            filteredImages[previousIndex]
        );
    };

    /* =========================
       KEYBOARD CONTROLS
    ========================= */

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!selectedImage) {
                return;
            }

            if (event.key === "Escape") {
                setSelectedImage(null);
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                showNextImage();
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                showPreviousImage();
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [selectedImage, filteredImages]);

    return (
        <section className="gallery-page">
            <div className="container">

                {/* =========================
                    HEADER
                ========================= */}

                <div className="gallery-page-header">

                    <p className="gallery-page-eyebrow">
                        Our Gallery
                    </p>

                    <h1 className="gallery-page-title">
                        A glimpse into the Ember & Spice
                        experience
                    </h1>

                    <p className="gallery-page-description">
                        Explore our dishes, dining spaces
                        and the atmosphere that brings
                        every visit to life.
                    </p>

                </div>

                {/* =========================
                    CATEGORIES
                ========================= */}

                <div className="gallery-page-categories">

                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`gallery-page-category ${
                                activeCategory === category
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() => {
                                setActiveCategory(
                                    category
                                );

                                setSelectedImage(null);
                            }}
                        >
                            {category}
                        </button>
                    ))}

                </div>

                {/* =========================
                    GALLERY GRID
                ========================= */}

                <div className="gallery-page-grid">

                    {filteredImages.map((item) => (
                        <button
                            key={item.id}
                            className="gallery-page-item"
                            onClick={() =>
                                setSelectedImage(item)
                            }
                            aria-label={`View ${item.alt}`}
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="gallery-page-image"
                            />

                            <div className="gallery-page-overlay">
                                <span>
                                    {item.category}
                                </span>
                            </div>
                        </button>
                    ))}

                </div>

                {/* =========================
                    EMPTY STATE
                ========================= */}

                {filteredImages.length === 0 && (
                    <div className="gallery-page-empty">
                        <p>
                            No images found.
                        </p>
                    </div>
                )}

            </div>

            {/* =========================
                LIGHTBOX
            ========================= */}

            {selectedImage && (
                <div
                    className="gallery-lightbox"
                    onClick={() =>
                        setSelectedImage(null)
                    }
                >

                    <div
                        className="gallery-lightbox-content"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Close */}

                        <button
                            className="gallery-lightbox-close"
                            onClick={() =>
                                setSelectedImage(null)
                            }
                            aria-label="Close gallery"
                        >
                            <X size={24} />
                        </button>

                        {/* Previous */}

                        <button
                            className="gallery-lightbox-prev"
                            onClick={showPreviousImage}
                            aria-label="Previous image"
                        >
                            <ArrowLeft size={24} />
                        </button>

                        {/* Image */}

                        <img
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            className="gallery-lightbox-image"
                        />

                        {/* Next */}

                        <button
                            className="gallery-lightbox-next"
                            onClick={showNextImage}
                            aria-label="Next image"
                        >
                            <ArrowRight size={24} />
                        </button>

                        {/* Caption */}

                        <p className="gallery-lightbox-caption">
                            {selectedImage.category}
                        </p>

                    </div>

                </div>
            )}

        </section>
    );
}

export default Gallery;