import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import restaurantData from "../data/restaurantData";
import "../styles/components/ReservationCTA.css";

function ReservationCTA() {
    return (
        <section className="reservation-section" id="reservation">
            <div className="container">
                <div className="reservation-card">

                    <div className="reservation-content">

                        <p className="reservation-eyebrow">
                            Reserve Your Table
                        </p>

                        <h2 className="reservation-title">
                            Make your next meal a memorable one.
                        </h2>

                        <p className="reservation-description">
                            Join us at {restaurantData.name} for an
                            unforgettable dining experience filled with
                            bold flavours, warm hospitality and beautiful
                            moments.
                        </p>

                        <div className="reservation-actions">

                            <Link
                                to="/contact"
                                className="reservation-button reservation-button-primary"
                            >
                                Book a Table
                                <ArrowRight size={18} />
                            </Link>

                            <a
                                href={`https://wa.me/${restaurantData.contact.whatsapp}`}
                                className="reservation-button reservation-button-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle size={18} />
                                WhatsApp Us
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ReservationCTA;