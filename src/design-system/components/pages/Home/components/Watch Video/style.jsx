import styled from "@emotion/styled";
import theme from "../../../../config";

export const WatchVideoWrapper = styled("section")`
    label: WatchVideoWrapper;
    padding: 3rem 0;
    display: flex;
    gap: 1%;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    align-items: flex-start;
    background-color: ${theme.white};
    color: ${theme.secondry};
`
export const WatchVideoText = styled("div")`
    label: WatchVideoText;
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: baseline;
    align-content: space-between;
    gap: 2rem;
    line-height: 1.5rem;
`
export const DivVideo = styled("div")`
    label: DivVideo;
    width: 49%;
    height: 100%;
    display: flex;
    float: right;
    justify-content: flex-end;
    flex-wrap: wrap;
`
export const VideoSrc = styled("div")`
    label: Video;
    width: 100%;
`