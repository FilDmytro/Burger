import styled from "styled-components";

function Header() {
    return (
        <HeadWrapper>
            <HeaderLogo />
            <HeaderStyled>Blog Name</HeaderStyled>
            <Main />
        </HeadWrapper>
    )
}

const HeaderStyled = styled.h1({
    textAlign: "center",
})

const HeadWrapper = styled.div({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "grey",
    height: "48px",
})

function HeaderLogo() {
    return (
        <LogoStyled>
            <img src="#" alt="img"/>
        </LogoStyled>
    )
}

const LogoStyled = styled.div({
    width: "180px",
    height: "37px",
    background: "#F1F2AE",
    marginLeft: "25px",
})

function Main() {
    return (
        <HeaderListStyled>
            <HeaderItemStyled></HeaderItemStyled>
            <HeaderItemStyled></HeaderItemStyled>
            <HeaderItemStyled></HeaderItemStyled>
            <HeaderItemStyled></HeaderItemStyled>
            <HeaderItemStyled></HeaderItemStyled>
        </HeaderListStyled>
    )
}

const HeaderListStyled = styled.ul({
    textDecoration: "none",
    display: "flex",
});

const HeaderItemStyled = styled.li({
    listStyle: "none",
    marginRight: "19px",
    width: "46px",
    height: "37px",
    background: "#E7EFD6",

})

export default Header;

