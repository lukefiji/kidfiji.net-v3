import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import { Container, Row, Column } from "../components/Grid";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import PortfolioGridItem from "../components/PortfolioGridItem";

import styleVars from "../styleVars";

const HeroBox = styled(Flex)`
  background-color: ${styleVars.black};
`;

const HeroText = styled.h1`
  font-family: ${styleVars.headerFont};
  font-weight: 400;
  font-size: 4em;
  color: ${styleVars.white};
  margin: 0;
  line-height: 1.125;
`;

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
  font-size: 20px;
  line-height: 1.75;
`;

const IndexPage = () =>
  <div>
    <Header />
    <HeroBox justify="center" align="center" px={2} py={2} mb={[4]} column>
      <Container>
        <HeroText>Hey there!</HeroText>
        <HeroText>My name's Luke Fiji,</HeroText>
        <HeroText>and I create experiences.</HeroText>
      </Container>
    </HeroBox>
    <Container>
      <Flex w={1} pb={4} wrap>
        <Box w={[1, 1 / 4]}>
          <TopLine />
          <SectionTitle>About</SectionTitle>
        </Box>
        <Box w={[1, 3 / 4]} pl={[0, 3, 4]} pt={2}>
          <SectionText>
            I am a web developer with roots in graphic design who wanted to
            expand on my work from things people can see into things that people
            can use and enjoy. I primarily focus on the front-end user
            experience but I also have some understanding with backend
            development in Node & Express. I hold a firm belief that finding the
            optimal balance between great design and usability is an essential
            part of achieving success in the industry.
          </SectionText>
        </Box>
      </Flex>
      <Flex w={1} pb={4} wrap>
        <Box w={[1, 1 / 4]}>
          <TopLine />
          <SectionTitle>Stack</SectionTitle>
        </Box>
        <Box w={[1, 3 / 4]} pl={[0, 3, 4]} pt={2}>
          <SectionText>
            I primarily work with JavaScript because I enjoy building things
            with React and Node. In fact, this site was created in React with
            the help of Gatsby.js. I also do some freelance work on the side
            with WordPress. I love tinkering with new tools, frameworks, and
            technologies, as I have an unsatiable thirst for learning. You can
            check out my experiments on my {" "}
            <Link to="/portfolio/">portfolio page</Link>.
          </SectionText>
        </Box>
      </Flex>
    </Container>
    <Container fullwidth wrap>
      <Row>
        <Column w={1 / 2}>
          <TopLine />
          <SectionTitle>Work</SectionTitle>
        </Column>
        <Column w={[1, 1 / 3]}>
          <PortfolioGridItem />
        </Column>
        <Column>
          <PortfolioGridItem />
        </Column>
      </Row>
    </Container>
  </div>;

export default IndexPage;
