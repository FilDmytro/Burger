import styled from "styled-components";
import Image from "../image";

const Burger = ({ orderPrice }) => {
  return (
    <BurgerWrapperStyled>
      <TotalPriceStyled>Total: {orderPrice}₴</TotalPriceStyled>
      <Image ingredient={"top_bun"} alt="Top Bun" />
      <SpanStyled>Please, start by adding products...</SpanStyled>
      <Image ingredient={"bottom_bun"} alt="Bottom Bun" />
    </BurgerWrapperStyled>
  );
};

const BurgerWrapperStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const TotalPriceStyled = styled.h2({
  width: "100%",
  paddingTop: "20px",
  paddingBottom: "80px",
});

const SpanStyled = styled.span({
  width: "100%",
});

export default Burger;
