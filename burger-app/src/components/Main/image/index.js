import styled from "styled-components";

const Image = ({ ingredient }) => {
  return (
    <ImageStyled
      src={require(`../../../../assets/images/${ingredient}.png`)}
      alt="img"
    />
  );
};

const ImageStyled = styled.img({
  margin: "5px",
});

export default Image;
