import styled from "@emotion/styled";
import background from "images/Home/Register.jpg";
import theme from "../../../../config";

export const RegisterHereWrabber = styled("section")`
    label: RegisterHereWrabber;
    background:url(${background});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    padding: 2rem 0;
`
export const RegisterContainer = styled("div")`
        label: RegisterContainer;
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;
        gap: 1%;
        justify-content: space-between;
`
export const RegisterText = styled("div")`
        label: RegisterText;
        display: flex;
        width: 49%;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
        :hover {
            color: ${theme.white};
        }
`
export const Title = styled("h1")`
    label: RegisterHereWrabber;
    color: ${theme.white};
    padding-bottom: 1rem;
`
export const TitleColor = styled("span")`
    label: TitleColor;
    color: ${theme.primary};
    margin: 0.5rem;
`
export const Text = styled("p")`
    label: Text;
    color: ${theme.white};
    font-size:1.2rem;
`
export const Description = styled("p")`
    label: Description;
    color: ${theme.gray};
    :hover {
        color: ${theme.white};
    }
`
export const RegisterForm = styled("div")`
    label: RegisterForm;
    display: flex;
    width: 49%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: flex-end;
    gap: 1.2rem;
    :hover {
        color: ${theme.white};
    }
`
export const InputRegister = styled("input")`
    label: InputRegister;
    display: flex;
    width: 70%;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
    border-radius: 5px;
    padding: 0.3rem;
    border: 1px solid ${theme.white};
    background: none;
    color: ${theme.white};
    &:focus {
        color: ${theme.white} !important;
        ::placeholder {
            color: ${theme.white} !important;
        }
    }
`
export const ButtonRegister = styled("button")`
    label: ButtonRegister;
    width: fit-content;
    padding: 0.2rem;
    font-size: 1.5rem;
    background: ${theme.primary};
    color: ${theme.white};
    border-radius: 5px;
    margin-left: 5px;
    text-align: center;
    float: right;
`