import styled from "@emotion/styled";
var widthAll = window.innerWidth;

export const OverviewWrapper = styled("div")`
    label: OverviewWrapper;
    width: 200px;
    text-align: center;
    
`;
export const UpOverviewWrapper = styled("div")`
    label: UpOverviewWrapper;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: #292626;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    margin: 0;
    border: 0;
`;
export const Title = styled("h2")`
    label: Title;
    color: #d4d4d4;
    margin: 15px
`;
export const Description = styled("p")`
    label: Description;
    color: #707070;
`;