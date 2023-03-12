import React from 'react'
import { H2, SpeakersWrapper } from './style'

function CreativeSpeakers({ imag, name, job, alt }) {
    return (
        <SpeakersWrapper>
            <img src={imag} alt={alt} width="100%" />
            <H2>{name}</H2>
            <span>{job}</span>
        </SpeakersWrapper>
    )
}

export default CreativeSpeakers