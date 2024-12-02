import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    recensioni: [],
  };
  getFeedback = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,

      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmYwNTA2ZmM4YzAwMTU2Yjg2ZmIiLCJpYXQiOjE3MzI4MDAyNjIsImV4cCI6MTczNDAwOTg2Mn0.LBzHQxm8Ovl76SSc6dJv3F12CSJnOAhnNlzvhQB2oec",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("orrore");
        }
      })
      .then((arrayOfFeedback) => {
       
        this.setState({
          recensioni: arrayOfFeedback,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    
    this.getFeedback()
  }
  componentDidUpdate(prevProps){
    if(this.props.id!==prevProps.id){this.getFeedback()}
    
  }
  render() {
    return (
        
    <CommentList recensioni={this.state.recensioni}/>
     
    )
  }
}

export default CommentArea;
