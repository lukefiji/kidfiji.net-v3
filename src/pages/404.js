import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import { Container } from "../components/Grid";
import Header from "../components/Header";

import styleVars from "../styleVars";

const NotFoundPage = () =>
  <div>
    <Header />
    <Container px={[2, 3]} py={4}>
      <Flex column align="center" justify="center">
        <h1>OOPS!</h1>
        <p>This page doesn&#39;t really exist. What is life?</p>
        <Link to="/">Go Home</Link>
      </Flex>
    </Container>
  </div>;

export default NotFoundPage;
