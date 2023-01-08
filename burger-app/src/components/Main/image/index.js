import styled from "styled-components";

const Image = ({ ingredient, alt }) => {
  return (
    <ImageStyled
      src={require(`../../../../assets/images/${ingredient}.png`)}
      alt={alt}
    />
  );
};

const ImageStyled = styled.img({
  margin: "5px",
});

export default Image;
