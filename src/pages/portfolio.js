import React from "react";
import Link from "gatsby-link";

import { Flex, Box } from "grid-styled";
import { Container, Row, Column } from "../components/Grid";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import PortfolioGridItem from "../components/PortfolioGridItem";
import Hero, { HeroText } from "../components/Hero";

const Portfolio = () =>
  <div>
    <Header />
    {/* <Container>
      <SectionHeader>Test</SectionHeader>
    </Container> */}
    <Hero>
      <HeroText>Check out my work.</HeroText>
    </Hero>
    <Container fullwidth>
      <Row wrap>
        <Column w={[1, 1 / 2, 1 / 3]}>
          <PortfolioGridItem />
        </Column>
        <Column w={[1, 1 / 2, 1 / 3]}>
          <PortfolioGridItem />
        </Column>
        <Column w={[1, 1 / 2, 1 / 3]}>
          <PortfolioGridItem />
        </Column>
      </Row>
    </Container>
  </div>;

export default Portfolio;
