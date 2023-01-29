import styled from "styled-components";
import Image from "../image";

const Burger = ({
  orderPrice,
  orderIngredients,
  ingredientsInOrder,
  checkout,
}) => {
  return (
    <BurgerWrapperStyled>
      <TotalPriceStyled>Total: {orderPrice}₴</TotalPriceStyled>
      <Image ingredient="top_bun" alt="Top Bun" />
      {orderIngredients ? (
        <SpanStyled />
      ) : (
        <SpanStyled>Please, start by adding products...</SpanStyled>
      )}
      <IngredientWrapperStyled>
        {orderIngredients ? (
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
      <Image ingredient="bottom_bun" alt="Bottom Bun" />
      <CheckoutBtnStyled onClick={checkout} data-action="checkout">
        Order
      </CheckoutBtnStyled>
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
  margin: '50px',
});

const SpanStyled = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: "100%",
  height: '20px',
  margin: '20px',
  marginTop: '60px',
  paddingBottom: '60px',
});

const IngredientsStyled = styled.img({
  width: '220px',
  height: '100px',
  margin: '-55px'
});

const IngredientWrapperStyled = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '-30px',
})

const CheckoutBtnStyled = styled.button({
  justifyContent: 'center',
  textAlign: 'center',
  width: '80px',
  height: '30px',
  color: 'black',
  fontWeight: '800',
  marginTop: '25px',
  cursor: 'pointer',
})

export default Burger;
