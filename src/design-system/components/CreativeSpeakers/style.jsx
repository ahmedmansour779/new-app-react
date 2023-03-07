import styled from "@emotion/styled";
import theme from "../config";

export const SpeakersWrapper = styled("div")`
    label: SpeakersWrapper;
    width: 250px ;
    text-align: center;
    color: ${theme.gray};
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
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
`;
export const UpSpeakersWrapper = styled("div")`
    label: UpSpeakersWrapper;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;
export const TitleSpeakersWrapper = styled("h2")`
    label: Title;
    color: ${theme.primary};
    margin: 15px
`;
export const DescriptionSpeakersWrapper = styled("p")`
    label: Description;
    color: ${theme.secondry};
`;