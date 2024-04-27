import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import { Card } from "../../collections/Card/Card.jsx";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
  justify-items: center;
  display: block;
  padding-top: 100px;
`;

export const StyledBodyContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  background-image: url("/img/background.png");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0 0 1rem 0;
  margin: 0 5rem;
  flex-wrap: wrap;
`;

export const StyledCardContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  align-items: center;
  text-align: center;
  font-family: sans-serif;
  padding-bottom: 60px;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 300px;
`;

export const StyledCard = styled(({ ...props }) => <Card {...props} />)``;
