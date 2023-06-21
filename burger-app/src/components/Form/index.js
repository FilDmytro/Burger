import styled from "styled-components";
import Image from "../../components/Main/image/";
import Basic from "./Formik";
import Icon from "@mui/material/Icon";
import { red } from "@mui/material/colors";

const ModalOrder = ({
  orderPrice,
  totalOrderIngredients,
  cancelOrder,
  clearAll,
}) => {
  return (
    <ModalWrapperlStyled>
      <ModalStyled>
        <ModalHeaderStyled>
          <TotalPriceStyled>Total: {orderPrice}₴</TotalPriceStyled>
          <Icon
            sx={{ color: red[400], cursor: "pointer" }}
            onClick={cancelOrder}
            data-action="cancel"
          >
            cancel
          </Icon>
        </ModalHeaderStyled>
        {totalOrderIngredients.map((ingredient) => (
          <OrderIngredientStyled key={ingredient}>
            <Image ingredient={ingredient[0]}></Image>
            <span>{ingredient[1]}</span>
          </OrderIngredientStyled>
        ))}
        <InputFormStyled>
          <Basic clearAll={clearAll} />
        </InputFormStyled>
      </ModalStyled>
    </ModalWrapperlStyled>
  );
};

const ModalWrapperlStyled = styled.div({
  width: "100vw",
  backgroundColor: "rgba(0,0,0,0.4)",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "100",
});

const ModalHeaderStyled = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const ModalStyled = styled.div({
  padding: "20px",
  margin: "100vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "12px",
  backgroundColor: "whiteSmoke",
  width: "400px",
});

const TotalPriceStyled = styled.h2({
  margin: "10px",
});

const OrderIngredientStyled = styled.div({
  display: "flex",
  width: "80%",
  justifyContent: "space-between",
});

const InputFormStyled = styled.div({
  display: "flex",
  flexDirection: "column",
});

export default ModalOrder;
