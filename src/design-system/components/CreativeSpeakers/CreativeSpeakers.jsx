import React from 'react'
import { SpeakersWrapper } from './style'

function CreativeSpeakers({ imag, name, job, alt }) {
    return (
        <SpeakersWrapper>
            <img src={imag} alt={alt} width="100%" />
            <h2>{name}</h2>
            <span>{job}</span>
        </SpeakersWrapper>
    )
}

export default CreativeSpeakers