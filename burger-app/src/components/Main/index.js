import React from "react";
import styled from "styled-components";
import Prices from "./Prices";
import Controls from "./Controls";
import Burger from "./Burger";
import axios from "axios";

const baseUrl = "https://burger-api-xcwp.onrender.com/";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      ingredients: [],
      ingredientsInOrder: [],
      orderPrice: "1.00",
      loader: true,
    };
  }

  componentDidMount = async () => {
    this.setState({ loader: true });
    try {
      const { data } = await axios.get(`${baseUrl}ingredients`);
      const ingredients = data.map((ingredient) => {
        return ingredient.name;
      });

      const quantities = data.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        []
      );

      this.setState({
        prices: data,
        ingredients: ingredients,
        burgerConstructor: quantities,
        loader: false,
      });
    } catch (error) {
      console.log("error");
    }
  };

  findIngredientPrice = (ingredient) => {
    return this.state.prices.find(
      (price) => price.name === ingredient
    ).price;
  };

  handleChangeIngredientQuantity = (event) => {
    event.preventDefault();
    const targetIngredient = event.target.dataset["ingredient"];
    const targetAction = event.target.dataset.action;
    const currentPrice = this.findIngredientPrice(targetIngredient);
    let orderIngredients = false;

    this.setState((prevState) => {
      const copyBurgerConstructor = { ...prevState.burgerConstructor };
      const copyIngredientsInOrder = [...prevState.ingredientsInOrder];

      let newPrice = +prevState.orderPrice;

      if (
        targetAction === "increment" &&
        copyBurgerConstructor[targetIngredient] < 5 &&
        copyIngredientsInOrder.length < 10
      ) {
        newPrice += +currentPrice;
        copyBurgerConstructor[targetIngredient]++;
        copyIngredientsInOrder.push(targetIngredient);
      }
      if (
        targetAction === "decrement" &&
        copyBurgerConstructor[targetIngredient] > 0
      ) {
        newPrice -= +currentPrice;
        copyBurgerConstructor[targetIngredient]--;

        const index = copyIngredientsInOrder.lastIndexOf(targetIngredient);
        copyIngredientsInOrder.splice(index, 1);
      }
      if (copyIngredientsInOrder.length > 0) {
        orderIngredients = true;
      }
      return {
        ...prevState,
        ingredientsInOrder: copyIngredientsInOrder,
        burgerConstructor: copyBurgerConstructor,
        orderPrice: newPrice.toFixed(2),
        orderIngredients,
      };
    });
  }

  dataCleaner = (event) => {
    event.preventDefault();
    const cleanerIngredient = event.target.dataset.action;

    this.setState((prevState) => {
      const cleaner = [];
      let orderIngredients = false;
      if (cleanerIngredient === "cleaner") {
        for (const ingredient in this.state.burgerConstructor) {
          cleaner[ingredient] = 0;
        };
      }
      return {
        ...prevState,
        ingredientsInOrder: [],
        burgerConstructor: cleaner,
        orderIngredients,
        orderPrice: "1.00",
      }
    })
  }

  render() {
    const {
      prices,
      ingredients,
      burgerConstructor,
      ingredientsInOrder,
      orderPrice,
      orderIngredients,
      loader,
      checkout,
    } = this.state;
    
    return (
      <MainWrapperStyled>
        <BurgerPricesWrapper>
          <Prices prices={prices} loader={loader}/>
        </BurgerPricesWrapper>
        <MyBurgerWrapperStyled>
          <Burger
            orderPrice={orderPrice}
            burgerConstructor={burgerConstructor}
            ingredientsInOrder={ingredientsInOrder}
            orderIngredients={orderIngredients}
            checkout={checkout}
          />
        </MyBurgerWrapperStyled>
        <BurgerIngredientsWrapper>
          <Controls
            ingredients={ingredients}
            quantityOfIngredient={burgerConstructor}
            updateBurger={this.handleChangeIngredientQuantity}
            dataCleaner={this.dataCleaner}
            loader={loader}
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
