import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

import FilmsScifi from "../src/data/scifi.json";
import BooksList from "./components/BooksList";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    id: "",
    selected: false,
  };
  changeSelected = (bookId) => {
    this.setState({
      selected: bookId,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <MyNavbar />
        </header>
        <main>
          <Container className=" mt-5">
            <Row className=" g-3">
              <Col xs={8}>
                <BooksList
                  FilmsScifi={FilmsScifi}
                  id={this.state.id}
                  selected={this.state.selected}
                  changeSelected={this.changeSelected}
                />
              </Col>
              <Col xs={4}>
                <CommentArea id={this.state.selected}  />
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
