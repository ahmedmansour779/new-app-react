import React from 'react'
import Accordion from './Accordion/Accordion'
import { AccordionHedear, AccordionWrapper, AccordionWrapperInside, Description, Question, Title } from './style'

export default function AccordionComponent() {
    return (
        <AccordionWrapper>
            <div className='container-main-project'>
                <AccordionWrapperInside>
                    <AccordionHedear>
                        <Title>Do You Have <Question>Question</Question> ?</Title>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur facilis ut eius beatae sunt illo architecto,
                        </Description>
                    </AccordionHedear>
                </AccordionWrapperInside>
                <Accordion />
            </div>
        </AccordionWrapper>
    )
}
