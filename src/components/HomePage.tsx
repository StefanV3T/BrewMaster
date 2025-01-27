import Blog from "./Blog";
import BrewingMethods from "./BrewingMethods";
import Equipment from "./Equipment";
import Hero from "./Hero";
import Recipes from "./Recipes";

const HomePage = () => {
    return (
        <>
            <Hero />
            <BrewingMethods />
            <Equipment />
            <Recipes />
            <Blog />
        </>
    );

}

export default HomePage;