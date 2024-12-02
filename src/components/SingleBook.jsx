import { Component } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Col xs={6} md={4} lg={3}>
          <Card
            className={`${this.props.selected === this.props.Book.asin ? "selected" : ""} h-100`}
            //className={`h-100 ${this.state.selected ? 'selected' : ''}`}
            value={this.props.selected}
            onClick={(e) => {
              this.props.changeSelected(this.props.Book.asin);
              

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
            <Card.Footer className="text-muted">
              {this.props.Book.price} $
            </Card.Footer>
          </Card>
          {/* {this.state.selected && <CommentArea id={this.props.Book.asin} />} */}
          {/* {this.state.selected && <Button onClick={()=>{this.setState({modal:true})}} variant="primary">Add comment</Button>} */}
        </Col>
        {/* <Modal show={this.state.modal} onHide={()=>{this.setState({modal:false})}}>
      <Modal.Header closeButton>
        <Modal.Title>Wtìrite your feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>  <AddComment/> </Modal.Body>
      <Modal.Footer>
       
        <Button variant="primary" >
          Save Feedback
        </Button>
      </Modal.Footer>
    </Modal> */}
      </>
    );
  }
}

export default SingleBook;
