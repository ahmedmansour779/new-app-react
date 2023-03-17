import styled from "@emotion/styled";
import theme from "../../../../config";

export const FooterWrapper = styled("section")`
    label: FooterWrapper;
    padding: 5rem;
    text-align: center;
    color: ${theme.gray};
`
export const MadeBy = styled("span")`
    label: MadeBy;
    color: ${theme.primary};
    font-weight: bold;
`
export const Ul = styled("ul")`
    label: Ul;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`
export const Li = styled("li")`
    label: Li;
    display: flex;
    width: 1rem;
    height: 1rem;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 1.4rem;
    &:hover {
        background-color: ${theme.primary};
    }
`