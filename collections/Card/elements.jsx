// Styled elements for the Card go here
import styled from "styled-components";
import {
  SectionHeading,
  SectionParagraph,
  SectionContainer,
} from "~/components";

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
  margin: 1.563rem 0 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 30%;
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
  max-width: 4rem;
`;

export const StyledCardContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  align-items: center;
`;
