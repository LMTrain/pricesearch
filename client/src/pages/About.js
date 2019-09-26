import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg">
        <h1>Item Price Search</h1>
        <h2>A Place To Find All the Prices For Your Items</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Search item prices through Walmart API
            </p>
            
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
