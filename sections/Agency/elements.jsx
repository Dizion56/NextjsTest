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
`;

export const StyledBodyContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
`;

export const StyledCardContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
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
  width: 30%;
  align-items: center;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;

export const StyledCard = styled(({ ...props }) => <Card {...props} />)``;
