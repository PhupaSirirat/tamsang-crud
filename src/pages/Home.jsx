import React, { useState } from 'react';
import Helmet from '../components/Helmet/helmet';
// import CommonSection 

import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card";
import NewProductCard from "../components/UI/newproduct-card";
import '../styles/add-bootstrap.css';

const Home = () => {
    const [allProducts, setAllProducts] = useState(products);
    return (
        <Container>
            <Row className="row">
                {allProducts.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                    <ProductCard item={item} />
                </Col>
                ))}
            </Row>
            <Container>
            <Row className="row">
                {allProducts.map((item) => (
                    <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                    <NewProductCard item={item}/>
                </Col>
                ))}
            </Row>
        </Container>
        </Container>
    );
};

export default Home;