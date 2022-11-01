import React from "react";
import Buildingfuture from "../componets/Buildingfuture";
import Herovideo from "../componets/Herovideo";
import Topnav from "../componets/Topnav";

import "../scss/home.scss";
const Home = () => {
	return (
		<>
			<Topnav />
            <Herovideo />
            <Buildingfuture />
		</>
	);
};

export default Home;
