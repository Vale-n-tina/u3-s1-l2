import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
state={
    selected:false
}

  render() {
    return (
      <Col xs={6} md={4} lg={2}>
        <Card className={` h-100 ${this.state.selected && "selected"} `} onClick={(e)=>{
            this.setState({
                selected:true
            })
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
      </Col>
    );
  }
}

export default SingleBook;
