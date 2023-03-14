import React, { useState } from 'react'
import theme from '../../../../config'
import OurProgramsComponent from "../../../../ourPrograms/OurProgramsComponent"
import { tab1, tab2, tab3 } from '../../../../ourPrograms/OurProgramsData'
import { Countent, Line, Span, Wrapper } from './style'

export default function Tabs() {
    const [tab, setTab] = useState("tab1")
    const switchTab = (tab) => {
        setTab(tab)
    }
    return (
        <>
            <Wrapper>
                <Span
                    onClick={() => switchTab("tab1")}
                    style={{
                        color: tab === "tab1" ? theme.primary : theme.secondry,
                        borderBottom: tab === "tab1" ? `2px solid ${theme.secondry}` : ""
                    }}>
                    first day
                </Span>
                <Span
                    onClick={() => switchTab("tab2")}
                    style={{
                        color: tab === "tab2" ? theme.primary : theme.secondry,
                        borderBottom: tab === "tab2" ? `2px solid ${theme.secondry}` : ""
                    }}>
                    second day
                </Span>
                <Span
                    onClick={() => switchTab("tab3")}
                    style={{
                        color: tab === "tab3" ? theme.primary : theme.secondry,
                        borderBottom: tab === "tab3" ? `2px solid ${theme.secondry}` : ""
                    }}>
                    third day
                </Span>
            </Wrapper>
            <Line />
            <Countent>
                {
                    tab === "tab2" ?
                        tab2.map(item => {
                            return (
                                <OurProgramsComponent
                                    imag={item.imag}
                                    alt={item.al}
                                    title={item.title}
                                    time={item.time}
                                    name={item.name}
                                    roomNumper={item.roomNumper}
                                    description={item.description}
                                    key={item.id} />
                            )
                        }) : tab === "tab3" ?
                            tab3.map(item => {
                                return (
                                    <OurProgramsComponent
                                        imag={item.imag}
                                        alt={item.al}
                                        title={item.title}
                                        time={item.time}
                                        name={item.name}
                                        roomNumper={item.roomNumper}
                                        description={item.description}
                                        key={item.id} />
                                )
                            }) : tab1.map(item => {
                                return (
                                    <OurProgramsComponent
                                        imag={item.imag}
                                        alt={item.al}
                                        title={item.title}
                                        time={item.time}
                                        name={item.name}
                                        roomNumper={item.roomNumper}
                                        description={item.description}
                                        key={item.id} />
                                )
                            })
                }
            </Countent>
        </>
    )
}
