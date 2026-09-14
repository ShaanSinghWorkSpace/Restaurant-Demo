import { FiStar } from "react-icons/fi";
import restaurantData from "../data/restaurantData";
import "../styles/components/Reviews.css";

function Reviews() {
    return (
        <section className="reviews-section" id="reviews">
            <div className="container">

                {/* Section Header */}
                <div className="reviews-header">
                    <p className="reviews-eyebrow">
                        Guest Reviews
                    </p>

                    <h2 className="reviews-title">
                        Loved by our guests
                    </h2>

                    <p className="reviews-description">
                        Discover what our guests have to say about their
                        experience at Ember & Spice.
                    </p>
                </div>

                {/* Reviews */}
                <div className="reviews-grid">
                    {restaurantData.reviews.map((review, index) => (
                        <article
                            className="review-card"
                            key={`${review.name}-${index}`}
                        >
                            <div className="review-rating">
                                {Array.from({ length: review.rating }).map(
                                    (_, starIndex) => (
                                        <FiStar
                                            key={starIndex}
                                            size={17}
                                            fill="currentColor"
                                        />
                                    )
                                )}
                            </div>

                            <p className="review-text">
                                "{review.text}"
                            </p>

                            <p className="review-name">
                                {review.name}
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Reviews;