import React from "react";
import Nav from "react-bootstrap/Nav";
const Topnav = () => {
	return (
		<>
			<Nav
				className="justify-content-center bg-secondary p-3  "
				activeKey="/home"
			>
				<Nav.Item>
					<Nav.Link href="/home" className="text-white">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1" className="text-white">Features</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2" className="text-white">Download</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3" className="text-white">Career</Nav.Link>
				</Nav.Item>
                <Nav.Item>
					<Nav.Link eventKey="link-4" className="text-white">Pricing</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
};

export default Topnav;
