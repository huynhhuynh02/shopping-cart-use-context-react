import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Col, Row } from "react-bootstrap";
import products from "../../_mocks/products";
import ProductItem from "../product-item";

const ProductList = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct(products);
    });
    return (
        <Row>
            {
                products?.map((item, key) => (
                    <Col className="mb-2" xs={3} key={key}>
                        <ProductItem id={item.id} thumbnail={item.thumbnail} title={item.name} price={item.price} />
                    </Col>
                ))
            }
        </Row>
    )
}

export default ProductList;