import {
    FiClock,
    FiMapPin,
    FiPhone,
    FiNavigation
} from "react-icons/fi";

import restaurantData from "../data/restaurantData";
import "../styles/components/Location.css";

function Location() {
    return (
        <section className="location-section" id="location">

            <div className="container">

                {/* Section Header */}
                <div className="location-header">

                    <p className="location-eyebrow">
                        Visit Us
                    </p>

                    <h2 className="location-title">
                        Find your way to {restaurantData.name}
                    </h2>

                    <p className="location-description">
                        We're looking forward to welcoming you. Find our
                        location, opening hours and contact information below.
                    </p>

                </div>


                {/* Location Content */}
                <div className="location-content">

                    {/* Map */}
                    <div className="location-map">

                        <iframe
                            title={`${restaurantData.name} location`}
                            src="https://www.google.com/maps?q=Chandigarh,India&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>


                    {/* Information */}
                    <div className="location-info">

                        {/* Address */}
                        <div className="location-item">

                            <div className="location-icon">
                                <FiMapPin size={20} />
                            </div>

                            <div>

                                <h3>
                                    Address
                                </h3>

                                <p>
                                    {restaurantData.contact.address}
                                </p>

                            </div>

                        </div>


                        {/* Phone */}
                        <div className="location-item">

                            <div className="location-icon">
                                <FiPhone size={20} />
                            </div>

                            <div>

                                <h3>
                                    Phone
                                </h3>

                                <a
                                    href={`tel:${restaurantData.contact.phone}`}
                                >
                                    {restaurantData.contact.phone}
                                </a>

                            </div>

                        </div>


                        {/* Opening Hours */}
                        <div className="location-item">

                            <div className="location-icon">
                                <FiClock size={20} />
                            </div>

                            <div className="location-hours">

                                <h3>
                                    Opening Hours
                                </h3>

                                {restaurantData.openingHours.map((day) => (
                                    <div
                                        className="hours-row"
                                        key={day.day}
                                    >
                                        <span>
                                            {day.day}
                                        </span>

                                        <span>
                                            {day.hours}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* Directions */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Chandigarh,India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="location-directions"
                        >
                            <FiNavigation size={18} />
                            Get Directions
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Location;