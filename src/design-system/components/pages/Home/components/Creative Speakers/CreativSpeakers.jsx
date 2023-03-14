import React from 'react';
import Slider from './Slider';
import {
    CreativSpeakersWrapper,
    DescriptionSpeakers,
    HeaderSpeakersWrapper,
    SliderWripper,
    Speakers,
    TitleSpeakersWrapper
} from './style';

function CreativSpeakersComponent() {
    return (
        <>
            <CreativSpeakersWrapper>
                <div style={{ gap: "2rem", }} className='container-main-project'>
                    <HeaderSpeakersWrapper>
                        <TitleSpeakersWrapper><Speakers>Creative</Speakers> Speakers</TitleSpeakersWrapper>
                        <DescriptionSpeakers>These are the most important figures in the company</DescriptionSpeakers>
                    </HeaderSpeakersWrapper>
                    <SliderWripper>
                        <Slider />
                    </SliderWripper>
                </div>
            </CreativSpeakersWrapper>
        </>
    )
}

export default CreativSpeakersComponent