import { useEffect, useState } from "react";

import {
    FiX,
    FiArrowLeft,
    FiArrowRight
} from "react-icons/fi";

import restaurantData from "../data/restaurantData";
import "../styles/components/Gallery.css";

function Gallery() {
    const [selectedImage, setSelectedImage] =
        useState(null);

    const galleryImages =
        restaurantData.gallery || [];


    /* =========================
       NEXT IMAGE
    ========================= */

    const showNextImage = () => {
        if (!selectedImage || galleryImages.length === 0) {
            return;
        }

        const currentIndex =
            galleryImages.findIndex(
                (item) =>
                    item.id === selectedImage.id
            );

        const nextIndex =
            (currentIndex + 1) %
            galleryImages.length;

        setSelectedImage(
            galleryImages[nextIndex]
        );
    };


    /* =========================
       PREVIOUS IMAGE
    ========================= */

    const showPreviousImage = () => {
        if (!selectedImage || galleryImages.length === 0) {
            return;
        }

        const currentIndex =
            galleryImages.findIndex(
                (item) =>
                    item.id === selectedImage.id
            );

        const previousIndex =
            (currentIndex - 1 +
                galleryImages.length) %
            galleryImages.length;

        setSelectedImage(
            galleryImages[previousIndex]
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
                return;
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
    }, [selectedImage]);


    return (
        <section
            className="gallery-section"
            id="gallery"
        >

            <div className="container">

                {/* =========================
                    HEADER
                ========================= */}

                <header className="gallery-header">

                    <p className="gallery-eyebrow">
                        Our Gallery
                    </p>

                    <h2 className="gallery-title">
                        A glimpse into the{" "}
                        {restaurantData.name} experience
                    </h2>

                    <p className="gallery-description">
                        Explore our food, ambience and the
                        moments that make every visit
                        memorable.
                    </p>

                </header>


                {/* =========================
                    GALLERY GRID
                ========================= */}

                {galleryImages.length > 0 && (
                    <div className="gallery-grid">

                        {galleryImages.map((item, index) => (
                            <button
                                type="button"
                                key={item.id}
                                className={`gallery-item gallery-item-${index + 1}`}
                                onClick={() =>
                                    setSelectedImage(item)
                                }
                                aria-label={`View ${item.alt}`}
                            >

                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="gallery-image"
                                    loading="lazy"
                                />

                                <div className="gallery-overlay">

                                    <span className="gallery-category">
                                        {item.category}
                                    </span>

                                </div>

                            </button>
                        ))}

                    </div>
                )}


                {/* =========================
                    EMPTY STATE
                ========================= */}

                {galleryImages.length === 0 && (
                    <div className="gallery-empty">
                        <p>
                            Gallery images coming soon.
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
                    role="dialog"
                    aria-modal="true"
                    aria-label="Gallery image viewer"
                >

                    <div
                        className="gallery-lightbox-content"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* Close */}

                        <button
                            type="button"
                            className="gallery-lightbox-close"
                            onClick={() =>
                                setSelectedImage(null)
                            }
                            aria-label="Close image"
                        >
                            <FiX size={26} />
                        </button>


                        {/* Previous */}

                        <button
                            type="button"
                            className="gallery-lightbox-prev"
                            onClick={showPreviousImage}
                            aria-label="Previous image"
                        >
                            <FiArrowLeft size={24} />
                        </button>


                        {/* Image */}

                        <img
                            src={selectedImage.image}
                            alt={selectedImage.alt}
                            className="gallery-lightbox-image"
                        />


                        {/* Next */}

                        <button
                            type="button"
                            className="gallery-lightbox-next"
                            onClick={showNextImage}
                            aria-label="Next image"
                        >
                            <FiArrowRight size={24} />
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