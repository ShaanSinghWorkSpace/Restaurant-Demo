const restaurantData = {
    name: "Ember & Spice",

    tagline: "Where Fire Meets Flavour",

    description:
        "Modern Indian cuisine crafted with bold spices, seasonal ingredients and timeless techniques.",

    cuisine: "Modern Indian Cuisine",

    logo: "logo.jpeg",

    heroImage: "hero.jpg",

    contact: {
        phone: "+91 98765 43210",
        email: "hello@emberandspice.com",
        whatsapp: "+919876543210",
        address: "123 Food Street, Chandigarh, India"
    },

    openingHours: [
        {
            day: "Monday",
            hours: "11:00 AM – 10:30 PM"
        },
        {
            day: "Tuesday",
            hours: "11:00 AM – 10:30 PM"
        },
        {
            day: "Wednesday",
            hours: "11:00 AM – 10:30 PM"
        },
        {
            day: "Thursday",
            hours: "11:00 AM – 10:30 PM"
        },
        {
            day: "Friday",
            hours: "11:00 AM – 11:30 PM"
        },
        {
            day: "Saturday",
            hours: "11:00 AM – 11:30 PM"
        },
        {
            day: "Sunday",
            hours: "11:00 AM – 10:30 PM"
        }
    ],

socialLinks: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/"
},

    features: [
        {
            id: 1,
            title: "Authentic Flavours",
            description:
                "Traditional recipes interpreted with a modern touch."
        },
        {
            id: 2,
            title: "Fresh Ingredients",
            description:
                "Carefully selected ingredients prepared fresh every day."
        },
        {
            id: 3,
            title: "Crafted With Passion",
            description:
                "Every dish is prepared with attention to flavour and detail."
        },
        {
            id: 4,
            title: "Warm Hospitality",
            description:
                "A welcoming dining experience from the moment you arrive."
        }
    ],

    menu: [
        {
            id: 1,
            name: "Smoked Paneer Tikka",
            description:
                "Charred paneer with aromatic spices and mint chutney.",
            price: 349,
            category: "Starters",
            image: "/images/menu/paneer-tikka.jpg",
            vegetarian: true,
            featured: true
        },
        {
            id: 2,
            name: "Tandoori Prawns",
            description:
                "Jumbo prawns marinated in spices and grilled in the tandoor.",
            price: 499,
            category: "Starters",
            image: "/images/menu/tandoori-prawns.jpg",
            vegetarian: false,
            featured: true
        },
        {
            id: 3,
            name: "Butter Chicken",
            description:
                "Tender chicken simmered in a rich tomato and butter sauce.",
            price: 449,
            category: "Main Course",
            image: "/images/menu/butter-chicken.jpg",
            vegetarian: false,
            featured: true
        },
        {
            id: 4,
            name: "Dal Makhani",
            description:
                "Slow-cooked black lentils finished with butter and cream.",
            price: 329,
            category: "Main Course",
            image: "/images/menu/dal-makhani.jpg",
            vegetarian: true,
            featured: false
        },
        {
            id: 5,
            name: "Garlic Naan",
            description:
                "Freshly baked naan topped with garlic and coriander.",
            price: 99,
            category: "Breads",
            image: "/images/menu/garlic-naan.jpg",
            vegetarian: true,
            featured: false
        },
        {
            id: 6,
            name: "Gulab Jamun",
            description:
                "Warm milk dumplings served with fragrant sugar syrup.",
            price: 149,
            category: "Desserts",
            image: "/images/menu/gulab-jamun.jpg",
            vegetarian: true,
            featured: false
        }
    ],

    gallery: [
        {
            id: 1,
            image: "/images/gallery/gallery-1.jpg",
            alt: "Dining table at Ember & Spice",
            category: "Ambience"
        },
        {
            id: 2,
            image: "/images/gallery/gallery-2.jpg",
            alt: "Signature dish served at Ember & Spice",
            category: "Food"
        },
        {
            id: 3,
            image: "/images/gallery/gallery-3.jpg",
            alt: "Restaurant interior",
            category: "Ambience"
        },
        {
            id: 4,
            image: "/images/gallery/gallery-4.jpg",
            alt: "Indian cuisine dish",
            category: "Food"
        }
    ],

    reviews: [
        {
            id: 1,
            name: "Aarav Sharma",
            rating: 5,
            text: "Beautiful ambience, excellent food and wonderful service."
        },
        {
            id: 2,
            name: "Meera Kapoor",
            rating: 5,
            text:
                "The flavours were incredible and every dish was beautifully presented."
        },
        {
            id: 3,
            name: "Rohan Mehta",
            rating: 4,
            text:
                "A great place for dinner with a warm and elegant atmosphere."
        }
    ]
};

export default restaurantData;