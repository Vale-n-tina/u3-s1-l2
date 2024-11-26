import { Row, Container, Col, Card } from "react-bootstrap";
import filmFantasy from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="mt-5 g-3">
        {filmFantasy.map((libro) => {
            console.log(libro)
          return (
            <Col key={libro.asin} xs={6} md={4} lg={2} >
              <Card className="h-100">
                <Card.Img id="img" variant="top" src={libro.img} />
                <Card.Body className="d-flex flex-column justify-content-center ">
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {libro.category}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{libro.price}€</Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllTheBooks
