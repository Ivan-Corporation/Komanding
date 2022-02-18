import React from "react";
import { Box } from "@chakra-ui/react";
import { Hero } from "./Containers/Hero/Hero";
import { AboutUs } from "./Containers/AboutUs/AboutUs";
import { Matches } from "./Containers/Matches/Matches";
import { Contact } from "./Containers/Contact/Contact";
import { Footer } from "./Containers/Footer/Footer";
import "./styles.css";

export default function App() {
    return (
        <Box w="100%" as="main" className="App">
            <Hero />
            <AboutUs />
            <Contact />
            <Matches />
            <Footer />
        </Box>
    );
}
