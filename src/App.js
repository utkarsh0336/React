// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Container fluid>
          <Container>
            <Row>
              <Col className="col-12 text-center py-4">
                <h1>Our Courses</h1>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Course 1</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
