import styled from "@emotion/styled";
import theme from "../config";

export const OverviewWrapper = styled("div")`
    label: OverviewWrapper;
    width: 200px;
    text-align: center;
    margin-bottom: 15px;
`;
export const UpOverviewWrapper = styled("div")`
    label: UpOverviewWrapper;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.background};
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    margin: 0;
    border: 0;
`;
export const Title = styled("h2")`
    label: Title;
    color: ${theme.textBackground};
    margin: 15px
`;
export const Description = styled("p")`
    label: Description;
    color: ${theme.textBackground};
`;