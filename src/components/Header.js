import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import { Container } from "../components/Grid";

import styleVars from "../styleVars";

const TopHeader = styled.header`
  padding: 1.25em 0;
  width: 100%;

  @media (min-width: 40em) {
    padding: 1.5em 0;
  }
`;

const Logo = styled.img`
  display: block;
  height: 4em;
  width: 4em;

  @media (min-width: 40em) {
    height: 5em;
    width: 5em;
  }
`;

const NavLink = styled(Link)`
  font-family: ${styleVars.headerFont};
  // letter-spacing: 2px;
  font-size: 1rem;
  text-decoration: none;
  // text-transform: uppercase;
  color: #1b1b1b;

  &:not(:last-child) {
    margin-right: 1em;
  }
`;

const Header = () => {
  return (
    <Container w={1} p={[2, 3]}>
      <Flex align="center">
        <Box>
          <Link to="/">
            <Logo src="/static/lf-logo.svg" />
          </Link>
        </Box>
        <Box ml="auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio/">Portfolio</NavLink>
        </Box>
      </Flex>
    </Container>
  );
};

export default Header;
