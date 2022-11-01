import React from "react";

import { Container, Col, Row } from "react-bootstrap";

import "../scss/features.scss";

import img from "../assets/work culture.png";
import img1 from "../assets/1542298796.jpeg";
import img2 from "../assets/earth.png";

const Features = () => {
	return (
		<>
			<Container className="features-container mt-4">
				<Row className="justify-content-md-center features-row">
					<Col xs lg="4" className="features-col-img ">
						<img src={img} alt="..." className=" w-100 rounded shadow" />
					</Col>

					<Col xs lg="4" className="features-col-text">
						<div className="feature-div font-weight-bold">
							Features <p className="font-weight-bold"> Ought </p>to Partake
						</div>
					</Col>
				</Row>
			</Container>
			<Container className="features-container mt-4">
				<Row className="justify-content-md-center features-row">
					<Col xs lg="4" className="features-col-img">
						<img src={img1} alt="..." className=" w-100 rounded shadow" />
					</Col>

					<Col xs lg="4" className="features-col-text">
						<div className="features-col-img">
							<img
								src={img2}
								alt="..."
								className=" w-100 rounded shadow"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Features;
