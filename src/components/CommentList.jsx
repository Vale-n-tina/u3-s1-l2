import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
        this.props.recensioni.map((feedback,i) => {
      return (
        <ListGroup key={i} >
          <ListGroup.Item className=" overflow-auto">Commento:{feedback.comment} <br /> voto: {feedback.rate}</ListGroup.Item>
        </ListGroup>
      );
    }));
  }
}

export default CommentList;

//elenco di array passato come prop da CommentArea
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmYwNTA2ZmM4YzAwMTU2Yjg2ZmIiLCJpYXQiOjE3MzI4MDAyNjIsImV4cCI6MTczNDAwOTg2Mn0.LBzHQxm8Ovl76SSc6dJv3F12CSJnOAhnNlzvhQB2oec
