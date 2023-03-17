import styled from "@emotion/styled";
import imge from "images/Home/contact-bg.jpg";
import theme from "../../../../config";

export const WrabberCountactUs = styled("section")`
    label: WrabberCountactUs;
    background: url(${imge}) fixed no-repeat center;
    background-size: cover;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
`
export const WrabberCountactUsInside = styled("section")`
    label: WrabberCountactUs;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1%;
    flex-wrap: wrap;
`
export const CountactUsText = styled("div")`
    label: CountactUsText;
    width: 49%;
    padding: 2rem 0;
`
export const H2 = styled("h2")`
    label: H2;
    color: ${theme.secondry};
    padding-bottom: 1rem;
    font-size: 3rem;
    width: 100%;
`
export const Span = styled("span")`
    label: Span;
    color: ${theme.primary};
`
export const Details = styled("div")`
    label: Details;
    width: 80%;
    padding: 2rem 0 2rem 1rem;
    color: ${theme.gray};
`
export const ButtonDownload = styled("button")`
    label: Details;
    color: ${theme.white};
    background-color: ${theme.primary};
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 15px;
`
export const CountactUsForm = styled("div")`
    label: CountactUsForm;
    background-color: ${theme.white};
    padding: 1rem;
    border-radius: 15px;
    width: 49%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 3rem;
    align-items: flex-start;
    padding: 1rem 0 2rem 1rem;
`
export const InputCountactUs = styled("input")`
    label: InputCountactUs;
    width: 100%;
    border: 1px solid ${theme.gray};
    border-radius: 10px;
    padding: 0.5rem;
    ::placeholder {
        color: ${theme.gray};
        opacity: 0.8 ;
    }
    &:hover{
        ::placeholder {
        color: ${theme.secondry};
        opacity: 1 ;
        }
    }
    color: ${theme.secondry};
`
export const MessageCountactUs = styled("textarea")`
    label: MessageCountactUs;
    width: 100%;
    border: 1px solid ${theme.gray};
    border-radius: 10px;
    padding: 0.5rem;
    ::placeholder {
        color: ${theme.gray};
        opacity: 0.8 ;
    }
    &:hover{
        ::placeholder {
        color: ${theme.secondry};
        opacity: 1 ;
        }
    }
    color: ${theme.secondry};
`
export const ButtonSend = styled("button")`
    label: ButtonSend;
    color: ${theme.white};
    background-color: ${theme.gray};
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 15px;
    &:hover{
        background-color: ${theme.secondry};
    }
`