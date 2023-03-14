import srcVideo from "../../../../../shared/videos/Video.mp4";
import { DivVideo, VideoSrc, WatchVideoText, WatchVideoWrapper } from "./style";

export default function WatchVideo() {
    return (
        <>
            <div className="container-main-project" id="WatchVideo">
                <WatchVideoWrapper>
                    <WatchVideoText>
                        <h1>WHATCH VIDEO</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cum illo, dolor magni expedita dolore?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cum illo, dolor magni expedita dolore? Vero deleniti in omnis inventore delectus temporibus magnam aut unde! Aspernatur nostrum rerum expedita pariatur?</p>
                    </WatchVideoText>
                    <DivVideo>
                        <VideoSrc>
                            <video width={"100%"} height={"100%"} src={srcVideo} controls="controls" />
                        </VideoSrc>
                    </DivVideo>
                </WatchVideoWrapper>
            </div>
        </>
    )
}