import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Card1 extends Component {
  state = {};
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.desc}</Card.Text>
          <Button variant="danger" onClick={this.props.onDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Card1;
