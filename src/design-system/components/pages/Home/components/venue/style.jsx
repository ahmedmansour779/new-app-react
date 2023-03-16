import styled from "@emotion/styled";
import imge from "images/Home/venue-bg.jpg";
import theme from "../../../../config";

export const WrabberVenue = styled("section")`
    label: WrabberVenue;
    background: url(${imge}) fixed no-repeat center;
    background-size: cover;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: flex-start;
`
export const H2 = styled("h2")`
    label: H2;
    color: ${theme.primary};
    padding-bottom: 3rem;
    font-size: 3rem;
`
export const P = styled("p")`
    label: Details;
    width: 50%;
    padding: 2rem 0;
    
`
export const Details = styled("div")`
    label: Details;
    font-weight: bold;
    padding-bottom: 1rem;
    line-height: 1rem;
`
