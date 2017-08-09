import React from "react";
import styled from "styled-components";

const Image = styled.div`border: 1px solid #dddddd;`;
const Title = styled.h3`margin: 0.5rem 0;`;
const Description = styled.p`
  margin: .5rem 0;
  color: #999999;
`;

const PortfolioGridItem = () => {
  return (
    <div>
      <Image>
        <img src="http://placehold.it/720x480/fff" alt="" />
      </Image>
      <Title>Title</Title>
      <Description>Portfolio Type</Description>
    </div>
  );
};

export default PortfolioGridItem;
