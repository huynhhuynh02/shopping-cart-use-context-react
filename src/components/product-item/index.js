import React from "react";
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body>
                <Card.Title><Link to={`/product/${props.id}`}>{props.title}</Link></Card.Title>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductItem;


