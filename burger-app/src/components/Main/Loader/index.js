import styled from "styled-components";

const Loader = ({ Loading }) => {
  return (
    <LoaderStyled Loading={Loading}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyled>
  );
};

const LoaderStyled = styled.div({
  margin: "5px",
});

export default Loader;