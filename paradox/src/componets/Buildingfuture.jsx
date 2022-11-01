import React from "react";

import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import img from "../assets/original.jpeg";

import "../scss/building.scss"

const Buildingfuture = () => {
	return (
		<>
			<Container className="mt-4 buildingTF-container" fluid>
				<Card className="bg-dark text-white border-0 btf-card">
					<Card.Img src={img} alt="..." className="rounded-0 btf-img opacity-75" />
					<Card.ImgOverlay>
						<Card.Title className="text-center text-dark">
							<h1> Building the future</h1>
						</Card.Title>
					</Card.ImgOverlay>
				</Card>
			</Container>
		</>
	);
};

export default Buildingfuture;
