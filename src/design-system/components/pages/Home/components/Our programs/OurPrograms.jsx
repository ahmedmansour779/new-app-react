import React from 'react'
import { DescriptionOurPrograms, HeaderOurProgramsWrapper, Our, OurProgramsWrapper, TapWrapper, TitleSpeakersWrapper } from './style'
import Tabs from './Tabs'

export default function OurPrograms() {
    return (
        <div className='container'>
            <OurProgramsWrapper>
                <HeaderOurProgramsWrapper>
                    <TitleSpeakersWrapper><Our>Our</Our> Programs</TitleSpeakersWrapper>
                    <DescriptionOurPrograms>These are the most important figures in the company</DescriptionOurPrograms>
                </HeaderOurProgramsWrapper>
                <TapWrapper>
                    <Tabs />
                </TapWrapper>
            </OurProgramsWrapper>
        </div>
    )
}
