import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

import FilmsScifi from "../src/data/scifi.json";
import BooksList from "./components/BooksList";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <Container className=" mt-5">
          <Row className=" g-3">
            <BooksList FilmsScifi={FilmsScifi} />
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
