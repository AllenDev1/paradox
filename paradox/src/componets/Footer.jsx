import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../scss/footer.scss";

const Footer = () => {
	return (
		<Container className="footer-container mt-4 rounded">
			
			<Row className="justify-content-md-center p-4 footer-row">
				<Col xs lg="10" className="footer-col  h-75">
					<Card className="text-center border-0 footer-card ">
						<Card.Body className="footerCardBody">
							<Card.Text>
                                <h1 className="opacity-100">
                                    Every inspiration from nature
                                </h1>
								Get started using our services with a 30-days free trail.
							</Card.Text>
							<Button variant="dark">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
