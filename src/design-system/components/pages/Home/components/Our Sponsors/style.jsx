import styled from "@emotion/styled";
import theme from "../../../../config";

export const Title = styled('h1')`
    label: Title;
    color: ${theme.secondry};
    font-size: 3rem;
    text-align: center;
    padding: 2rem 0;
`
export const Sponsors = styled('span')`
    label: Sponsors;
    color: ${theme.primary};
`
export const Description = styled('p')`
    label: Description;
    color: ${theme.gray};
    text-align: center;
`
export const OurSponsorsImags = styled('div')`
    label: OurSponsorsImags;
    color: ${theme.gray};
    text-align: center;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1%;
    align-items: center;
`
export const UpImage = styled('div')`
    label: UpImage;
    display: flex;
`