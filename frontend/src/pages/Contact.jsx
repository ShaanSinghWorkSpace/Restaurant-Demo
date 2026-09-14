import { useState } from "react";

import {
    FiClock,
    FiMail,
    FiMapPin,
    FiMessageCircle,
    FiPhone
} from "react-icons/fi";

import {
    FaInstagram,
    FaFacebookF
} from "react-icons/fa";

import restaurantData from "../data/restaurantData";
import "../styles/pages/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        // Hide success message if the user starts editing again
        if (isSubmitted) {
            setIsSubmitted(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Reservation request:", formData);

        setIsSubmitted(true);

        setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "",
            message: ""
        });
    };

    const today = new Date()
        .toISOString()
        .split("T")[0];

    return (
        <section className="contact-page">

            <div className="container">

                {/* Page Header */}
                <div className="contact-page-header">

                    <p className="contact-page-eyebrow">
                        Contact & Reservations
                    </p>

                    <h1 className="contact-page-title">
                        We'd love to welcome you
                    </h1>

                    <p className="contact-page-description">
                        Reserve a table, get in touch with our team or find
                        your way to {restaurantData.name}.
                    </p>

                </div>

                {/* Main Content */}
                <div className="contact-page-content">

                    {/* Reservation Form */}
                    <div className="contact-form-wrapper">

                        <div className="contact-section-heading">

                            <p className="contact-page-label">
                                Reserve Your Table
                            </p>

                            <h2>
                                Make a reservation
                            </h2>

                            <p>
                                Fill in your details and we'll have your
                                request ready for confirmation.
                            </p>

                        </div>

                        {/* Success Message */}
                        {isSubmitted && (
                            <div
                                className="contact-success-message"
                                role="status"
                            >
                                <h3>
                                    Reservation request received
                                </h3>

                                <p>
                                    Thank you for contacting {restaurantData.name}.
                                    Our team will get in touch with you to
                                    confirm your reservation.
                                </p>
                            </div>
                        )}

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Name + Email */}
                            <div className="contact-form-row">

                                <div className="contact-form-group">

                                    <label htmlFor="name">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                    />

                                </div>

                                <div className="contact-form-group">

                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                    />

                                </div>

                            </div>

                            {/* Phone + Guests */}
                            <div className="contact-form-row">

                                <div className="contact-form-group">

                                    <label htmlFor="phone">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91"
                                        required
                                    />

                                </div>

                                <div className="contact-form-group">

                                    <label htmlFor="guests">
                                        Guests
                                    </label>

                                    <select
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select guests
                                        </option>

                                        <option value="1">
                                            1 Guest
                                        </option>

                                        <option value="2">
                                            2 Guests
                                        </option>

                                        <option value="3">
                                            3 Guests
                                        </option>

                                        <option value="4">
                                            4 Guests
                                        </option>

                                        <option value="5">
                                            5 Guests
                                        </option>

                                        <option value="6+">
                                            6+ Guests
                                        </option>

                                    </select>

                                </div>

                            </div>

                            {/* Date + Time */}
                            <div className="contact-form-row">

                                <div className="contact-form-group">

                                    <label htmlFor="date">
                                        Preferred Date
                                    </label>

                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        min={today}
                                        required
                                    />

                                </div>

                                <div className="contact-form-group">

                                    <label htmlFor="time">
                                        Preferred Time
                                    </label>

                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                            {/* Message */}
                            <div className="contact-form-group">

                                <label htmlFor="message">
                                    Additional Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Any special requests?"
                                    rows="5"
                                ></textarea>

                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="contact-submit-button"
                            >
                                Request a Reservation
                            </button>

                        </form>

                    </div>

                    {/* Contact Information */}
                    <aside className="contact-info">

                        {/* Address */}
                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                <FiMapPin size={20} />
                            </div>

                            <div>

                                <h3>
                                    Visit Us
                                </h3>

                                <p>
                                    {restaurantData.contact.address}
                                </p>

                            </div>

                        </div>

                        {/* Phone */}
                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                <FiPhone size={20} />
                            </div>

                            <div>

                                <h3>
                                    Call Us
                                </h3>

                                <a
                                    href={`tel:${restaurantData.contact.phone}`}
                                >
                                    {restaurantData.contact.phone}
                                </a>

                            </div>

                        </div>

                        {/* Email */}
                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                <FiMail size={20} />
                            </div>

                            <div>

                                <h3>
                                    Email Us
                                </h3>

                                <a
                                    href={`mailto:${restaurantData.contact.email}`}
                                >
                                    {restaurantData.contact.email}
                                </a>

                            </div>

                        </div>

                        {/* Opening Hours */}
                        <div className="contact-info-item">

                            <div className="contact-info-icon">
                                <FiClock size={20} />
                            </div>

                            <div className="contact-hours">

                                <h3>
                                    Opening Hours
                                </h3>

                                {restaurantData.openingHours.map((day) => (
                                    <div
                                        className="contact-hours-row"
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

                        {/* Quick Actions */}
                        <div className="contact-quick-actions">

                            <a
                                href={`tel:${restaurantData.contact.phone}`}
                                className="contact-quick-action"
                            >
                                <FiPhone size={18} />
                                Call Us
                            </a>

                            <a
                                href={`https://wa.me/${restaurantData.contact.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-quick-action"
                            >
                                <FiMessageCircle size={18} />
                                WhatsApp
                            </a>

                        </div>

                        {/* Social Links */}
                        <div className="contact-socials">

                            <p>
                                Follow us
                            </p>

                            <div>

                                <a
                                    href={restaurantData.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={20} />
                                </a>

                                <a
                                    href={restaurantData.socialLinks.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF size={20} />
                                </a>

                            </div>

                        </div>

                    </aside>

                </div>

                {/* Map */}
                <div className="contact-map">

                    <iframe
                        title="Ember & Spice location"
                        src="https://www.google.com/maps?q=Chandigarh,India&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

            </div>

        </section>
    );
}

export default Contact;