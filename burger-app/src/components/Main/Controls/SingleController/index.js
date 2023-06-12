import Image from "../../image";
import styled from "styled-components";
import Icon from '@mui/material/Icon';


const SingleController = ({ ingredient, burgerConstructor, updateBurger, quantitiesOfIngredient }) => {
  return (
    <SingleControllerStyled onClick={updateBurger} data-ingredient={ingredient}>
      <Icon fontSize="small" style={{cursor: 'pointer'}} data-action='decrement' data-ingredient={ingredient}>remove_circle_out_lined_icon</Icon>
      <QuantytyControllsStyled>{quantitiesOfIngredient}</QuantytyControllsStyled>
      <Icon fontSize="small" style={{cursor: 'pointer'}} data-action='increment' data-ingredient={ingredient}>add_circle_out_line_icon</Icon>
      <Image ingredient={ingredient} />
    </SingleControllerStyled>
  );
};

const SingleControllerStyled = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const QuantytyControllsStyled = styled.span({
  width: "15px",
});

export default SingleController;
