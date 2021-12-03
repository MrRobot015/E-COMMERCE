import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Nav1 from "../components/Nav1";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider"

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Nav1/>
            <Slider />
            <Categories />
            <Products />
            <NewsLetter />
            <Footer/>
        </div>
    )
};

export default Home;
