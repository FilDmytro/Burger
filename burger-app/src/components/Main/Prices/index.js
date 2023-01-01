import React, { Component } from "react";
import styled from "styled-components";

export class Prices extends Component {
  render() {
    return (
      <PricesStyled>
        <HeaderPriceStyled> our Prices</HeaderPriceStyled>
        {this.props.prices.map((el) => (
          <span className="prices" key={el._id}>
            {el.name}: {el.price} ₴
          </span>
        ))}
      </PricesStyled>
    );
  }
}

const PricesStyled = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

const HeaderPriceStyled = styled.h2({
  width: "100%",
  color: "black",
});

export default Prices;
