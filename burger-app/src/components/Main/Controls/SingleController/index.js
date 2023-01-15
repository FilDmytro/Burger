import Image from "../../image";
import styled from "styled-components";

const SingleController = ({ ingredient, burgerConstructor, updateBurger }) => {
  return (
    <SingleControllerStyled onClick={updateBurger} data-ingredient={ingredient}>
      <DecrementControllerStyled data-action='decrement' data-ingredient={ingredient}>-</DecrementControllerStyled>
      <QuantytyControllsStyled>{burgerConstructor}</QuantytyControllsStyled>
      <IncrementControllerStyled data-action='increment' data-ingredient={ingredient}>+</IncrementControllerStyled>
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
  cursor: 'pointer',
  transition: 'all 0.25s',
});

const IncrementControllerStyled = styled.button({
  width: "15px",
  height: "15px",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  fontWeight: "500",
  cursor: 'pointer',
  transition: 'all 0.25s',
});

const QuantytyControllsStyled = styled.span({
  width: "15px",
});

export default SingleController;
