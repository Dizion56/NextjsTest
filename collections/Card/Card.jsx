import Image from "next/image";
import {
  StyledCardContainer,
  StyledDescription,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
} from "./elements.jsx";

// The Card to be exported goes here
export const Card = ({ title, description, image, ...props }) => {
  return (
    <StyledCardContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};
