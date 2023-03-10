import styled from "@emotion/styled";
import backGround from "images/Home/background.webp";
import theme from "../../../../config";
const height = window.innerHeight;

export const HeaderWrapper = styled("div")`
    label: HeaderWrapper;
    height: ${height}px;
    width: 100%;
    background:url(${backGround});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    padding: 10% 0;
    text-align: center;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const H3 = styled("h3")`
    label: H3;
    font-size: 2rem;
    color: ${theme.secondry};
`
export const Title = styled("h1")`
    label: Title;
    font-size: 4rem;
    color: ${theme.secondry};
    padding: 20px;
`
export const LearnMore = styled("button")`
    label: LearnMore;
    font-size: 1rem;
    color: ${theme.secondry};
    padding: 20px;
    border: 1px solid ${theme.secondry};
    background:none ;
    margin: 1rem 2rem;
    &:hover{
        background-color: ${theme.primary};
        color:${theme.textBackground};
        border: 1px solid ${theme.textBackground}
    }
    cursor: pointer;
    border-radius: 5px;
`
export const Register = styled("button")`
    label: Register;
    font-size: 1rem;
    color: ${theme.secondry};
    padding: 20px;
    border: 1px solid ${theme.secondry};
    background:none ;
    margin: 1rem 2rem;
    &:hover{
        background-color: ${theme.primary};
        color:${theme.textBackground};
        border: 1px solid ${theme.textBackground}
    }
    cursor: pointer;
    border-radius: 5px;
`
