import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";

const Burger = ({ orderPrice, orderStatus, ingredientsInOrder, checkout }) => {
  return (
    <BurgerWrapperStyled>
      <TotalPriceStyled>Total: {orderPrice}₴</TotalPriceStyled>
      <TopBunStyled src={require("../../images/top_bun.png")} alt="Top Bun" />
      {orderStatus ? (
        <SpanStyled />
      ) : (
        <SpanStyled>Please, start by adding products...</SpanStyled>
      )}
      <IngredientWrapperStyled>
        {orderStatus ? (
          ingredientsInOrder.map((element, index) => {
            return (
              <IngredientsStyled
                key={element + index}
                src={require(`../../../../assets/images/updateBurgerImg/${element}.png`)}
                alt={element}
                style={{
                  bottom: 300 + index * 10,
                  zIndex: index + 1,
                }}
              />
            );
          })
        ) : (
          <></>
        )}
      </IngredientWrapperStyled>
      <BottomBunStyled
        src={require("../../images/bottom_bun.png")}
        alt="Bottom Bun"
      />
      <Button
        variant="outlined"
        color="inherit"
        onClick={checkout}
        data-action="checkout"
      >
        Order
        <Icon>add_shopping_cart_icon</Icon>
      </Button>
    </BurgerWrapperStyled>
  );
};

const BurgerWrapperStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

const TotalPriceStyled = styled.h2({
  width: "100%",
  margin: "50px",
});

const SpanStyled = styled.span({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "20px",
  margin: "20px",
  marginTop: "30px",
  paddingBottom: "30px",
});

const IngredientsStyled = styled.img({
  width: "220px",
  height: "100px",
  margin: "-55px",
});

const IngredientWrapperStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "-30px",
});

const TopBunStyled = styled.img({
  top: 0,
  zIndex: "11",
  width: "240px",
});

const BottomBunStyled = styled.img({
  width: "240px",
  paddingBottom: "40px",
});

export default Burger;
