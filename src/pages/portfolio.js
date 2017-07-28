import React from "react";
import Link from "gatsby-link";

import { Flex, Box } from "grid-styled";

import Container from "../components/Container";
import Header from "../components/Header";

const Portfolio = () =>
  <div>
    <Header />
    <Container width={1}>
      <h1>Portfolio</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </div>;

export default Portfolio;
