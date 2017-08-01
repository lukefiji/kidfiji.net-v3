import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Box } from "grid-styled";

import styleVars from "../styleVars";

const StyledSectionHeader = styled(Box)`
  background-color: ${styleVars.black};
  color: ${styleVars.white};
  text-transform: uppercase;
  font-family: ${styleVars.headerFont};
  font-size: 1.5rem;
`;

const SectionHeader = props => {
  return (
    <StyledSectionHeader py={2} px={[2, 3]}>
      {props.children}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
