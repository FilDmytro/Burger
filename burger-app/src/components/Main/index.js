import React from "react";
import styled from "styled-components";
import Prices from "./Prices";
import Controls from "./Controls";
import Burger from "./Burger";
import axios from "axios";

const baseUrl = "https://burger-api-xcwp.onrender.com/ingredients";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      ingredients: [],
      ingredientAddingOrder: {
        onion: 0,
        cheese: 0,
        pickle: 0,
        tomato: 0,
        meat: 0,
        salad: 0,
      },
      orderPrice: "1.00",
    };
  }

  componentDidMount = async () => {
    try {
      const { data } = await axios.get(baseUrl);
      const ingredients = data.map((ingredient) => {
        return ingredient.name;
      });

      const quantities = data.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );

      this.setState({
        prices: data,
        ingredients: ingredients,
        ingredientAddingOrder: quantities,
      });
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    const {
      prices,
      ingredients,
      // burgerCreator,
      ingredientAddingOrder,
      orderPrice,
    } = this.state;

    return (
      <MainWrapperStyled>
        <BurgerPricesWrapper>
          <Prices prices={prices} />
        </BurgerPricesWrapper>
        <MyBurgerWrapperStyled>
          <Burger orderPrice={orderPrice} />
        </MyBurgerWrapperStyled>
        <BurgerIngredientsWrapper>
          <Controls
            ingredients={ingredients}
            ingredientAddingOrder={ingredientAddingOrder}
          />
        </BurgerIngredientsWrapper>
      </MainWrapperStyled>
    );
  }
}

const MainWrapperStyled = styled.div({
  width: "100%",
  height: "88%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const MyBurgerWrapperStyled = styled.div({
  width: "70%",
  height: "100%",
  background: "whitesmoke",
});

const BurgerPricesWrapper = styled.div({
  width: "15%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
});

const BurgerIngredientsWrapper = styled.div({
  width: "15%",
  height: "100%",
  display: "flex",
  alignItems: "center",
});

export default Main;
