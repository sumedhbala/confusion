import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Link from "react-router-dom/Link";

function RenderDish({ dish }) {
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
function RenderComments({ comments }) {
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
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
