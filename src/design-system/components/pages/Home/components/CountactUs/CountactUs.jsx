import React from 'react'
import { ButtonDownload, ButtonSend, CountactUsForm, CountactUsText, Details, H2, InputCountactUs, MessageCountactUs, Span, WrabberCountactUs, WrabberCountactUsInside } from './style'

export default function CountactUs() {
    return (
        <>
            <WrabberCountactUs>
                <div className='container-main-project'>
                    <WrabberCountactUsInside>
                        <CountactUsText className='CountactUsText'>
                            <H2>NEW <Span>Event</Span></H2>
                            <Details>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad suscipit maiores ratione, assumenda sint eligendi ex, </p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad suscipit maiores ratione, assumenda sint eligendi ex, </p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad suscipit maiores ratione, assumenda sint eligendi ex, </p>
                            </Details>
                            <ButtonDownload>Download Now</ButtonDownload>
                        </CountactUsText>
                        <CountactUsForm className='CountactUsForm'>
                            <H2 style={{ textAlign: "center" }}>Keep In <Span>Touch</Span></H2>
                            <InputCountactUs placeholder='Name' type={'text'} />
                            <InputCountactUs placeholder='Email' type={'email'} />
                            <MessageCountactUs placeholder='Message' type={'text'} />
                            <ButtonSend>Send</ButtonSend>
                        </CountactUsForm>
                    </WrabberCountactUsInside>
                </div>
            </WrabberCountactUs>
        </>
    )
}
