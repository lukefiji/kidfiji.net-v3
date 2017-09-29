// Example
import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

const StyledContainer = styled(Box)`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Container = props =>
  <StyledContainer {...props} px={props.fullwidth ? 0 : [2, 3]} py={[2, 3]} />;

const Row = props => <Flex {...props} />;

const Column = props => <Box {...props} px={props.fullwidth ? 0 : [2, 3]} />;

export default { Container, Row, Column };
