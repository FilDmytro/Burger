import Image from "../../image";
import styled from "styled-components";

const SingleController = ({ ingredient, ingredientAddingOrder }) => {
  return (
    <SingleControllerStyled>
      <DecrementControllerStyled>-</DecrementControllerStyled>
      <QuantytyControllsStyled>{ingredientAddingOrder}</QuantytyControllsStyled>
      <IncrementControllerStyled>+</IncrementControllerStyled>
      <Image ingredient={ingredient} />
    </SingleControllerStyled>
  );
};

const SingleControllerStyled = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const DecrementControllerStyled = styled.button({
  width: "15px",
  height: "15px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  fontWeight: "500",
});

const IncrementControllerStyled = styled.button({
  width: "15px",
  height: "15px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  fontWeight: "500",
});

const QuantytyControllsStyled = styled.span({
  width: "15px",
});

export default SingleController;
