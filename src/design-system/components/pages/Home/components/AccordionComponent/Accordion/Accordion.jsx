import React, { useState } from 'react'
import { data } from './data'
import { AccordionWrapper, Content, H2, Item, P, Title, Wrapper } from './style'

export default function Accordion() {
    const [active, setActive] = useState(null)

    const toggle = (i) => {
        if (active === i) {
            return setActive(null)
        } else {
            return setActive(i)
        }
    }

    return (
        <Wrapper>
            <AccordionWrapper>
                {
                    data.map(item => {
                        return (
                            <Item key={item.id} onClick={() => toggle(item.id)}>
                                <Title>
                                    <H2>{item.question}</H2>
                                    <span style={{ fontSize: "2.5rem" }}>{active === item.id ? "-" : "+"}</span>
                                </Title>
                                <Content className={active === item.id ? "show" : ""}>
                                    <P>{item.answerOne}</P>
                                    <P>{item.answerTwo}</P>
                                </Content>
                            </Item>
                        )
                    })
                }
            </AccordionWrapper>
        </Wrapper>
    )
}
