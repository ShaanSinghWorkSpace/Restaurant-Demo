import Hero from "../components/Hero";
import RestaurantIntro from "../components/RestaurantIntro";
import FeaturedDishes from "../components/FeaturedDishes";
import WhyChooseUs from "../components/WhyChooseUs";
import MenuPreview from "../components/MenuPreview";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import ReservationCTA from "../components/ReservationCTA";
import Location from "../components/Location";

function Home() {
    return (
        <>
            <Hero />
            <RestaurantIntro />
            <FeaturedDishes />
            <WhyChooseUs />
            <MenuPreview />
            <About />
            <Gallery />
            <Reviews />
            <ReservationCTA />
            <Location />
        </>
    );
}

export default Home;