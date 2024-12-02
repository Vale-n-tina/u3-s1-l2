import { Component } from "react";
import { Card, Col, Button,Modal } from "react-bootstrap";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

class SingleBook extends Component {
  state = {
    selected: false,
    modal:false
  };

  render() {
    return (
        <>
      <Col xs={6} md={4} lg={2}>
        <Card
          className={this.state.selected ? "selected" : ""}
          //className={`h-100 ${this.state.selected ? 'selected' : ''}`}
          onClick={(e) => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
        >
          <Card.Img
            className=" mx-auto w-75 mt-3"
            variant="top"
            src={this.props.Book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.Book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea id={this.props.Book.asin} />}
        {this.state.selected && <Button onClick={()=>{this.setState({modal:true})}} variant="primary">Add comment</Button>}
      </Col>
      <Modal show={this.state.modal} onHide={()=>{this.setState({modal:false})}}>
      <Modal.Header closeButton>
        <Modal.Title>Wtìrite your feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>  <AddComment/> </Modal.Body>
      <Modal.Footer>
       
        <Button variant="primary" >
          Save Feedback
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    );
  }
}

export default SingleBook;
