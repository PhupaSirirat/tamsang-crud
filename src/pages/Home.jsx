import React from 'react';

import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import NewProductCard from "../components/UI/newproduct-card";
import '../styles/add-bootstrap.css';

const Home = () => {
    // const [allProducts, setAllProducts] = useState(products);
    return (
        <Container>
            <Row className="row">
                {products.map((item) => (
                    <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                    <NewProductCard item={item}/>
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;