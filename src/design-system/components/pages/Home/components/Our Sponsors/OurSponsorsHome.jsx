import React from 'react'
import Oursponsours from '../../../../OurSponsours/Oursponsours'
import ourSponsorsData from "../../../../OurSponsours/OurSponsoursData"
import { Description, OurSponsorsImags, Sponsors, Title } from './style'

export default function OurSponsorsHome() {
    return (
        <div className='container-main-project'>
            <Title>Our <Sponsors>Sponsours</Sponsors></Title>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla voluptatum ab quam,</Description>
            <OurSponsorsImags>
                {ourSponsorsData.map(item => {
                    return (
                        <div className='up-image' style={{ width: "24.25%", marginBottom: "1rem" }} key={item.id}>
                            <Oursponsours src={item.src} alt={item.alt} />
                        </div>
                    )
                })}
            </OurSponsorsImags>
        </div>
    )
}
