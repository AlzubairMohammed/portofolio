import { Button, Col, Row } from "react-bootstrap";

import "./Header.css";

function Header({ screenWidth }) {
  return (
    <>
      <Row className="section">
        <Col
          className="d-flex justify-content-center align-items-center"
          lg="12"
          md="12"
          sm="12"
        >
          <img src="me2.jpeg" />
        </Col>
        <Col className="" lg="12" md="12" sm="12">
          <h1 className="text-center">I'm Alzubair Mohammed </h1>
          <h1 className="text-center">Full Stack Developer</h1>
          <p className="text-center">
            Full stack developer and JavaScript developer
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <Button className="border-0 m-1" style={{ width: "180px" }}>
              Hire me
            </Button>
            <Button className="m-1" variant="outline-secondary">
              More info
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Header;
