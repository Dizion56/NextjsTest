// Styled elements for the Card go here
import styled from "styled-components";
import {
  SectionParagraph,
  SectionContainer,
} from "~/components";

export const StyledTitle = styled((props) => <h3 {...props} />)`
  margin: 0;
  width: fit-content;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  max-width: 300px;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 32.03rem;
  padding: 1.5rem;
  max-height: 65rem;
  width: 100%;
  height: 100%;
  max-width: 4rem;
`;

export const StyledCardContainer = styled(({ index, height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: .8rem .5rem .8rem .5rem;
  width: calc(28vw + ${({ index }) => index * 30}px);
  background-color: rgba(0, 0, 0, ${({ index }) => (index / 100) + index / 50 + 0.03 });
  border-radius: 5px;
  margin: 0;
  border: 3px solid transparent;
  flex-wrap: wrap;

  @media (max-width: 880px) {
    width: calc(70vw + ${({ index }) => index * 30}px);
  }

  &:hover {
    border: 3px solid blue;
    h3 {
      color: blue;
      text-decoration: underline;
    }
  }
`;
