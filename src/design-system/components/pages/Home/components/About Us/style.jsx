import styled from "@emotion/styled";
import theme from "../../../../config";

export const AboutUsWrapper = styled("section")`
    label: AboutUsWrapper;
    padding: 3rem 0;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    align-items: flex-start;
    background-color: ${theme.white};
    color: ${theme.secondry};
`
export const DivAbout = styled("div")`
    label: DivAbout;
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: baseline;
    align-content: space-between;
    gap: 2rem;
    line-height: 1.5rem;
`
export const DivImageAbout = styled("div")`
    label: DivImageAbout;
    width: 35rem;
    display: inline-block;
`
export const ImageAbout = styled("img")`
    label: ImageAbout;
    width: 100%;
`