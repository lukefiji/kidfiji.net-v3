import React from "react";
import Link from "gatsby-link";

import { Flex, Box } from "grid-styled";
import { Container, Row, Column } from "../components/Grid";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import PortfolioGridItem from "../components/PortfolioGridItem";

const Portfolio = () =>
  <div>
    <Header />
    {/* <Container>
      <SectionHeader>Test</SectionHeader>
    </Container> */}
    <Container fullwidth>
      <Row>
        <Column>
          <PortfolioGridItem />
        </Column>
        <Column>
          <PortfolioGridItem />
        </Column>
        <Column>
          <PortfolioGridItem />
        </Column>
      </Row>
    </Container>
  </div>;

export default Portfolio;
