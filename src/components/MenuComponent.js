import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    return <DishDetail dish={dish} />;
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        {this.renderDish(this.state.selectedDish)}
      </div>
    );
  }
}

export default Menu;
