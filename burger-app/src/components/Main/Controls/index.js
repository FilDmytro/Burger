import SingleController from "./SingleController";
import styled from "styled-components";
import Loader from "../Loader";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';



const Controls = ({
  ingredients,
  quantitiesOfIngredient,
  updateBurger,
  clearAll,
  isLoading,
}) => {
  return (
    <ControlsWrapperStyled>
      <ControlsStyled onClick={updateBurger}>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
          <>
            {ingredients.map((ingredient) => (
              <SingleController
                key={ingredient}
                ingredient={ingredient}
                quantitiesOfIngredient={quantitiesOfIngredient[ingredient]}
              ></SingleController>
            ))}
          </>
        )}
      </ControlsStyled>
      <Button
        variant="outlined"
        color="inherit"
        onClick={clearAll}
        data-action="cleaner"
      >
        Clear
        <Icon>delete</Icon>
      </Button>
    </ControlsWrapperStyled>
  );
};

const ControlsStyled = styled.div({
  width: "100%",
  display: "flex",
  alignItems: 'center',
  flexDirection: "column",
  paddingBottom: "20px",
});

const ControlsWrapperStyled = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export default Controls;
