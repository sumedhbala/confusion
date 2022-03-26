import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  renderComments(comments) {
    if (comments == null) {
      return <div></div>;
    }
    const commentsList = comments.map((comment) => {
      return (
        <div key={comment.id} className="li mb-1">
          <p className="row mb-0">{comment.comment}</p>
          <div className="row">
            <p>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>"Comments"</h4>
        <ul className="list-unstyled">{commentsList}</ul>
      </div>
    );
  }
  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
