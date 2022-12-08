import React, { useState } from 'react';
import Helmet from '../components/Helmet/helmet';
// import CommonSection 

import { Container, Row, Col } from "reactstrap";

import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card";
import NewProductCard from "../components/UI/newproduct-card";
import ReactPaginate from "react-paginate";
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
            <Row>
                <Col lg="3" md="4" sm="6" xs="6" className="mt-5"><NewProductCard/></Col>
                <Col lg="3" md="4" sm="6" xs="6" className="mt-5"><NewProductCard/></Col>
                <Col lg="3" md="4" sm="6" xs="6" className="mt-5"><NewProductCard/></Col>
                <Col lg="3" md="4" sm="6" xs="6" className="mt-5"><NewProductCard/></Col>
            </Row>
        </Container>
    );
};

export default Home;