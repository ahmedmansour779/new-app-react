import styled from "@emotion/styled";
import theme from "../../../../config";

export const CreativSpeakersWrapper = styled("section")`
    label: CreativSpeakersWrapper;
    padding: 3rem 0 ;
    background-color: ${theme.white};
    text-align: center;
`
export const Speakers = styled("span")`
    label: CreativSpeakersWrapper;
    color: ${theme.secondry}
`
export const TitleSpeakersWrapper = styled("h2")`
    label: Title;
    color: ${theme.primary};
`;
export const HeaderSpeakersWrapper = styled("div")`
    label: HeaderSpeakersWrapper;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    align-content: stretch;
    justify-content: center;
    margin: 0 auto;
    font-size: 30px;
    text-align: center;
    gap: 1rem;
`;
export const DescriptionSpeakers = styled("p")`
    label: DescriptionSpeakers;
    color: ${theme.secondry};
`;
export const UpSpeakersWrapper = styled("div")`
    label: UpSpeakersWrapper;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const SliderWripper = styled("div")`
    label: SliderWripper;
    padding: 3rem 0;
`;