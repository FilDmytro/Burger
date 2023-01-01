import styled from "styled-components";

function Header() {
    return (
        <HeadWrapper>
            <HeaderLogo />
            <HeaderStyled>Burger House</HeaderStyled>
            <Main />
        </HeadWrapper>
    )
}

const HeaderStyled = styled.h1({
    textAlign: "center",
    paddingLeft: "100px",
    color: "whitesmoke",
})

const HeadWrapper = styled.div({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "black",
    height: "6%",
})

function HeaderLogo() {
    return (
        <LogoStyled>
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" width='38px'alt="img"/>
        </LogoStyled>
    )
}

const LogoStyled = styled.div({
    width: "180px",
    height: "37px",
    marginLeft: "10px",
})

function Main() {
    return (
        <HeaderListStyled>
            <HeaderItemStyled className="home">Home</HeaderItemStyled>
            <HeaderItemStyled className="orders">Orders</HeaderItemStyled>
            <HeaderItemStyled classNAme="contact">Contact</HeaderItemStyled>
            <HeaderItemStyled classNAme="faq">FAQ</HeaderItemStyled>
        </HeaderListStyled>
    )
}

const HeaderListStyled = styled.ul({
    textDecoration: "none",
    display: "flex",
    color: "whitesmoke",
});

const HeaderItemStyled = styled.li({
    listStyle: "none",
    marginRight: "19px",
    width: "46px",
    height: "37px",
})

export default Header;

