import styled from "styled-components";
import Prices from "./Prices";
import Controls from "./Controls";
import Burger from "./Burger";
import React, { useEffect, useState } from "react";
import { getPrices } from "../apiCall";
import ModalOrder from "../Form";

const Main = () => {
  const [data, setData] = useState([]);
  const [orderStatus, setOrderStatus] = useState(false);
  const [ingredientsInOrder, setIngredientsInOrder] = useState([]);
  const [quantitiesOfIngredient, setQuantitiesOfIngredients] = useState(0);
  const [orderPrice, setOrderPrice] = useState("1.00");
  const [isLoading, setLoading] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [totalOrderIngredients, setTotalOrderIngredients] = useState([]);

  const getLoad = async () => {
    const data = await getPrices();
    return data;
  };

  useEffect(() => {
    try {
      getLoad().then((response) => {
        setData(response.data);
        setLoading(false);
      });
    } catch (error) {
      console.log("error");
    }
  }, []);

  const ingredients = data.map((ingredient) => {
    return ingredient.name;
  });

  useEffect(() => {
    const quantities = data.reduce(
      (acc, curr) => ({ [curr.name]: 0, ...acc }),
      []
    );
    setQuantitiesOfIngredients(quantities);
  }, [data]);

  const findIngredientPrice = (ingredient) => {
    return data.find((price) => price.name === ingredient).price;
  };

  const handleChangeIngredientQuantity = (event) => {
    const targetIngredient = event.target.dataset["ingredient"];
    const targetAction = event.target.dataset.action;
    const currentPrice = findIngredientPrice(targetIngredient);

    const copyQuantitiesOfIngredient = { ...quantitiesOfIngredient };
    const copyIngredientsInOrder = [...ingredientsInOrder];
    let orderStatus = false;
    let newOrderPrice = +orderPrice;

    if (
      targetAction === "increment" &&
      copyQuantitiesOfIngredient[targetIngredient] < 5 &&
      copyIngredientsInOrder.length < 10
    ) {
      newOrderPrice += +currentPrice;
      copyQuantitiesOfIngredient[targetIngredient]++;
      copyIngredientsInOrder.push(targetIngredient);
    }
    if (
      targetAction === "decrement" &&
      copyQuantitiesOfIngredient[targetIngredient] > 0
    ) {
      newOrderPrice -= +currentPrice;
      copyQuantitiesOfIngredient[targetIngredient]--;

      const index = copyIngredientsInOrder.lastIndexOf(targetIngredient);
      copyIngredientsInOrder.splice(index, 1);
    }
    if (copyIngredientsInOrder.length > 0) {
      orderStatus = true;
    }
    setQuantitiesOfIngredients(copyQuantitiesOfIngredient);
    setIngredientsInOrder(copyIngredientsInOrder);
    setOrderPrice(newOrderPrice.toFixed(2));
    setOrderStatus(orderStatus);
  };

  const clearAll = (event) => {
    const cleanerIngredient = event.target.dataset.action;
    const cleaner = [];

    if (cleanerIngredient === "cleaner") {
      for (const ingredient in quantitiesOfIngredient) {
        cleaner[ingredient] = 0;
      }
    }
    setQuantitiesOfIngredients(cleaner);
    setIngredientsInOrder([]);
    setOrderStatus(false);
    setOrderPrice("1.00");
    setTimeout(() => {
      setModalActive(false);
    }, 1000);
  };

  const cancelOrder = (event) => {
    const cancel = event.target.dataset.action;
    let cancelOrder = true;

    if (cancel === "cancel") {
      cancelOrder = false;
    }
    setModalActive(cancelOrder);
  };

  const checkout = (event) => {
    const checkout = event.target.dataset.action;
    const order = Object.entries(quantitiesOfIngredient);
    const newOrder = [];

    if (checkout === "checkout") {
      order.forEach((ingredient) => {
        if (ingredient[1] !== 0) {
          newOrder.push(ingredient);
        }
      });
    }
    setModalActive(true);
    setTotalOrderIngredients(newOrder);
  };

  return (
    <MainWrapperStyled>
      <BurgerPricesWrapper>
        <Prices Loading={isLoading} data={data} />
      </BurgerPricesWrapper>
      <MyBurgerWrapperStyled>
        <Burger
          orderPrice={orderPrice}
          ingredientsInOrder={ingredientsInOrder}
          orderStatus={orderStatus}
          checkout={checkout}
          modalActive={modalActive}
        />
      </MyBurgerWrapperStyled>
      <BurgerIngredientsWrapper>
        <Controls
          isLoading={isLoading}
          ingredients={ingredients}
          data={data}
          quantitiesOfIngredient={quantitiesOfIngredient}
          updateBurger={handleChangeIngredientQuantity}
          clearAll={clearAll}
        />
      </BurgerIngredientsWrapper>
      {modalActive ? (
        <ModalOrder
          orderPrice={orderPrice}
          totalOrderIngredients={totalOrderIngredients}
          cancelOrder={cancelOrder}
          clearAll={clearAll}
        />
      ) : (
        <></>
      )}
    </MainWrapperStyled>
  );
};

const MainWrapperStyled = styled.div({
  width: "100%",
  height: "88%",
  display: "flex",
  justifyContent: "center",
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
