import SingleController from "./SingleController";
import styled from "styled-components";
import Loader from "../Loader";

const Controls = ({
  ingredients,
  quantityOfIngredient,
  updateBurger,
  dataCleaner,
  loader,
}) => {
  return (
  <ControlsWrapperStyled>
    <ControlsStyled onClick={updateBurger}>
      {loader ? (
        <Loader loader={loader} />
      ) : (
        <>
          {ingredients.map((ingredient) => (
            <SingleController
              key={ingredient}
              ingredient={ingredient}
              burgerConstructor={quantityOfIngredient[ingredient]}
            ></SingleController>
            
          ))}
        </>
      )}
    </ControlsStyled>
    <ClearBtnStyled onClick={dataCleaner} data-action="cleaner">Clear</ClearBtnStyled>
  </ControlsWrapperStyled>
  );
};

const ControlsStyled = styled.div({
  width: "100%",
  display: "flex",
  alignItems: 'center',
  flexDirection: "column",
});

const ClearBtnStyled = styled.button({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  width: '80px',
  height: '30px',
  color: 'black',
  fontWeight: '800',
  marginTop: '25px',
  cursor: 'pointer',
});

const ControlsWrapperStyled = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export default Controls;
