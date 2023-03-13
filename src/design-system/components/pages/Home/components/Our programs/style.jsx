import styled from "@emotion/styled";
import theme from "../../../../config";

export const OurProgramsWrapper = styled("section")`
    label: OurProgramsWrapper;
    padding: 0rem 0 5rem 0;
    background-color: ${theme.white};
    color: ${theme.secondry};
`
export const HeaderOurProgramsWrapper = styled("div")`
    label: HeaderOurProgramsWrapper;
    text-align: left;
    font-size:30px ;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1rem
`
export const TitleSpeakersWrapper = styled("h2")`
    label: TitleSpeakersWrapper;
    color: ${theme.primary};
`
export const Our = styled("span")`
    label: Our;
    color: ${theme.secondry};
`
export const DescriptionOurPrograms = styled("p")`
    label: DescriptionOurPrograms;
    color: ${theme.gray};
    font-size: 1.2rem;
`
export const TapWrapper = styled("div")`
    label: TapWrapper;
    padding-top: 1rem;
`
export const Wrapper = styled("div")`
    label: Wrapper;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    font-weight: bold;
    flex-direction: row;
    justify-content: flex-start;
`
export const Span = styled("span")`
    label: Span;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    font-weight: bold;
    flex-direction: row;
    justify-content: flex-start;
`
export const Line = styled("div")`
    label: Line;
    width: 100%;
    background-color: ${theme.secondry};
    height: 1px;
`