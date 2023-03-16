import React from 'react'
import { Details, H2, P, WrabberVenue } from './style'

export default function Venue() {
    return (
        <WrabberVenue>
            <div className='container-main-project'>
                <H2>Venue</H2>
                <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia culpa aspernatur consequuntur error, commodi voluptate totam est eligendi esse sit atque ducimus dolorum beatae voluptatum.</P>
                <Details>
                    <p>NEW EVENT</p>
                    <p>120 Market Street, Suite 110</p>
                    <p>San Francisco,CA 10110</p>
                    <p>Tel: 010-020-0120</p>
                </Details>
            </div>
        </WrabberVenue>
    )
}
