import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import { Container, Row, Column } from "../components/Grid";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import PortfolioGridItem from "../components/PortfolioGridItem";
import Hero, { HeroText } from "../components/Hero";
import styleVars from "../styleVars";

const TopLine = styled.hr`
  height: 4px;
  background: ${styleVars.fontColor};
  margin-bottom: 12px;

  @media (max-width: 40em) {
    width: 50%;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${styleVars.headerFont};
  font-weight: 500;
`;

const SectionText = styled.p`
  font-family: ${styleVars.bodyFont};
  font-weight: 300;
  line-height: 1.75;
`;

const IndexPage = () =>
  <div>
    <Header />
    <Hero>
      <HeroText>Hey there!</HeroText>
      <HeroText>My name's Luke Fiji,</HeroText>
      <HeroText>and I create experiences.</HeroText>
    </Hero>
    <Container fullwidth>
      <Row w={1} pb={4} wrap>
        <Column w={[1, 1 / 4]}>
          <TopLine />
          <SectionTitle>About</SectionTitle>
        </Column>
        <Column w={[1, 3 / 4]} px={[0, 3, 4]} pt={2}>
          <SectionText>
            I am a web developer wanted to expand on my roots in graphic design
            - I wanted to transform things people can see into things that
            people can use and enjoy. I usually find myself doing work on the
            front-end side but sometimes I’ll take a dive into the back-end with
            Node and Express. I hold a firm belief that finding the optimal
            balance between great design and usability is an essential part of
            achieving success in the industry.
          </SectionText>
        </Column>
      </Row>
      <Row w={1} pb={4} wrap>
        <Column w={[1, 1 / 4]}>
          <TopLine />
          <SectionTitle>Stack</SectionTitle>
        </Column>
        <Column w={[1, 3 / 4]} px={[0, 3, 4]} pt={2}>
          <SectionText>
            I love working with JavaScript because I started off learning how to
            build things for the web and haven’t looked back. On the way, I’ve
            found myself to enjoy creating things with React and Node; and in
            fact, this site was created with React. I just love tinkering with
            new tools, frameworks, and technologies, as I have an unsatiable
            thirst for learning. You can check out my work and experiments on my{" "}
            <Link to="/portfolio/">portfolio page</Link>.
          </SectionText>
        </Column>
      </Row>
      <Row wrap>
        <Column w={[1, 1 / 2, 1 / 4]}>
          <TopLine />
          <SectionTitle>Work</SectionTitle>
        </Column>
        <Column w={[1, 1 / 2, 1 / 4]} pt={2}>
          <PortfolioGridItem />
        </Column>
        <Column w={[1, 1 / 2, 1 / 4]} pt={2}>
          <PortfolioGridItem />
        </Column>
        <Column w={[1, 1 / 2, 1 / 4]} pt={2}>
          <PortfolioGridItem />
        </Column>
      </Row>
    </Container>
  </div>;

export default IndexPage;
