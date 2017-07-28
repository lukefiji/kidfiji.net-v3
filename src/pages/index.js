import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Container from "../components/Container";
import Header from "../components/Header";

import styleVars from "../styleVars";

const HeroBox = styled(Flex)`
  background-color: #1b1b1b;
`;

const HeroText = styled.h1`
  font-family: ${styleVars.headerFont};
  font-weight: 400;
  font-size: 4em;
  color: #ffffff;
  margin: 0;
  line-height: 1.125;
`;

const TopLine = styled.hr`
  height: 4px;
  background: #1b1b1b;
  margin-bottom: 12px;

  @media (max-width: 40em) {
    width: 50%;
  }
`;

const SectionHeader = styled.h2`
  font-family: ${styleVars.headerFont};
  font-weight: 500;
`;

const SectionText = styled.p`font-family: sans-serif;`;

const IndexPage = () =>
  <div>
    <Header />
    <HeroBox justify="center" align="center" px={2} py={4} mb={[2, 2]} column>
      <Container>
        <HeroText>Hey there!</HeroText>
        <HeroText>My name's Luke Fiji,</HeroText>
        <HeroText>and I create experiences.</HeroText>
      </Container>
    </HeroBox>
    <Container px={[2, 3]} py={4}>
      <Flex w={1} pb={4} wrap>
        <Box w={[1, 1 / 4]}>
          <TopLine />
          <SectionHeader>About</SectionHeader>
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
          <SectionHeader>Stack</SectionHeader>
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
  </div>;

export default IndexPage;
