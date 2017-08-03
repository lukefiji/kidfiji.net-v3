import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import { Container } from "../components/Grid";
import styleVars from "../styleVars";

const HeroBox = styled(Flex)`
  background-color: ${styleVars.black};
`;

export const HeroText = styled.h1`
  font-family: ${styleVars.headerFont};
  font-weight: 600;
  font-size: 4em;
  color: ${styleVars.white};
  margin: 0;
  line-height: 1.125;
`;

const Hero = props => {
  return (
    <HeroBox justify="center" align="center" px={2} py={2} mb={[4]} column>
      <Container>
        {props.children}
      </Container>
    </HeroBox>
  );
};

export default Hero;
