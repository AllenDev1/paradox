import React from "react";
import Buildingfuture from "../componets/Buildingfuture";
import Features from "../componets/Features";
import Footer from "../componets/Footer";
import Herovideo from "../componets/Herovideo";
import Topnav from "../componets/Topnav";

import "../scss/home.scss";
const Home = () => {
	return (
		<>
			<Topnav />
            <Herovideo />
            <Buildingfuture />
            <Features />
            <Footer />
		</>
	);
};

export default Home;
