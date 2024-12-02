import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BooksList extends Component {
  render(){
  return (
    <Row>
      {this.props.FilmsScifi.map((libro) => {
       
        return <SingleBook key={libro.asin} Book={libro} selected={this.props.selected} changeSelected={this.props.changeSelected} />;
      })}
    </Row>
  );
}};

export default BooksList;
