import Image from "next/image";
import {
  StyledBodyContainer,
  StyledCardContainer,
  StyledContainer,
  StyledImageContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledCard,
} from "./elements.jsx";

export const Agency = ({ title, description, image, cards }) => {
  let cardIndex = 0;
  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledBodyContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledCardContainer>
          {cards.map((card) => (
            <StyledCard key={card.title} index={cardIndex++} {...card}  />
          ))}
        </StyledCardContainer>
      </StyledBodyContainer>
    </StyledContainer>
  );
};
