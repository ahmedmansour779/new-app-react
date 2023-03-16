import styled from "@emotion/styled";
import theme from "../../../../config";

export const AccordionWrapper = styled("section")`
    label: AccordionWrapper;
    background-color: ${theme.white};
    margin: 1.5rem 0;
    text-align: center;
`
export const AccordionWrapperInside = styled("section")`
    label: AccordionWrapperInside;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
`
export const AccordionHedear = styled("div")`
        label: AccordionHedear;
        display: flex;
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-around;
        align-items: center;
        gap: 0.5rem;
`
export const Title = styled("h1")`
    label: Title;
    color: ${theme.secondry};
    padding-bottom: 1rem;
`
export const Question = styled("span")`
    label: Question;
    color: ${theme.primary};

`
export const Description = styled("p")`
    label: Description;
    color: ${theme.gray};
`