import React from "react";

import { Container, Col } from "react-bootstrap";

const Herovideo = () => {
	return (
		<>
			<Container>
				<Col className="mt-4 ">
					<iframe
						className="rounded"
						src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
						width="100%"
						height="500px"
					></iframe>
				</Col>
			</Container>
		</>
	);
};

export default Herovideo;
