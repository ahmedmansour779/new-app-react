import styled from "@emotion/styled";
import theme from "../../../../../config";

export const Wrapper = styled("div")`
    label: Wrapper;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const AccordionWrapper = styled("div")`
    label: AccordionWrapper;
    width: 100%;
`
export const Item = styled("div")`
    label: Item;
    margin-bottom: 1rem ;
    box-shadow: 3px 4px 6px -4px ${theme.gray} ;
    transition: 0.5s all cubic-bezier(0,1,0,1);
`
export const Title = styled("div")`
    label: Title;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1rem;
    gap: 2rem;
    
`
export const H2 = styled("h2")`
    label: H2;
    color: ${theme.secondry};
    &::selection {
        background:#fff;
    }
`
export const Content = styled("div")`
    label: Content;
    color: ${theme.gray};
    padding: 0.5rem 0.5rem;
    transition: 0.5s all !important;
    display: none;
    &.show {
        display: block;
        transition: 0.5s all !important;
    }
`
export const P = styled("p")`
    label: P;
    color: ${theme.gray};
    text-align: left;
`