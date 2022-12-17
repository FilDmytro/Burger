import styled from "styled-components";

function Banner() {
    return (
        <BannerStyled><span>Full-width banner image</span></BannerStyled>
    )
}

const BannerStyled = styled.div({
    marginTop: "19px",
    width: "100%",
    height: "145px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#D9D9D9;",
});

export default (Banner);