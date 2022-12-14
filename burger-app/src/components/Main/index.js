import styled from "styled-components";

function Main() {
    return (
        <MainWrapperStyled>
            <BlogWrapperStyled>
                <BlogHeaderStyled>Blog</BlogHeaderStyled>
                <BlogItemStyled></BlogItemStyled>
                <BlogItemStyled></BlogItemStyled>
                <BlogItemStyled></BlogItemStyled>
                <BlogItemStyled></BlogItemStyled>
            </BlogWrapperStyled>
            <NewsWrapperStyled>
                <NewsHeaderStyled>News</NewsHeaderStyled>
                <NewsItemStyled></NewsItemStyled>
                <NewsItemStyled></NewsItemStyled>
                <NewsItemStyled></NewsItemStyled>
            </NewsWrapperStyled>
        </MainWrapperStyled>
    )
};


const MainWrapperStyled = styled.div({
    marginTop: "24px",
    width: "100%",
    height: "440px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

const BlogWrapperStyled = styled.div({
    width: "70%",
    height: "437px",
    display: "flex",
    flexDirection: "column",
    background: "#D9D9D9",
})

const BlogHeaderStyled = styled.h2({
    fontWeight: "400",
});

const BlogItemStyled = styled.div({
    width: "95%",
    height: "70px",
    margin: "0 auto",
    background: "#F9D7D7",
    marginBottom: "27px",
});

const NewsWrapperStyled = styled.div({
    width: "25%",
    height: "430px",
    display: "flex",
    flexDirection: "column",
    background: "#D9D9D9",
});

const NewsHeaderStyled = styled.h2({
    fontWeight: "400",
});

const NewsItemStyled = styled.div({
    width: "88%",
    height: "110px",
    margin: "0 auto",
    background: "#BDCDF7",
    marginBottom: "9px",
});


export default (Main);
