import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import { Container } from "../components/Grid";
import styleVars from "../styleVars";

export const HeroText = styled.h1`
  font-family: ${styleVars.headerFont};
  font-weight: 600;
  font-size: 4em;
  color: ${styleVars.black};
  margin: 0;
  line-height: 1.125;
`;

const Hero = props => {
  return (
    <Box align="center" py={0} my={[4]} column>
      <Container>
        {props.children}
      </Container>
    </Box>
  );
};

export default Hero;
