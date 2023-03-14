import image from "images/Home/aboutUs.webp"
import React from 'react'
import { AboutUsWrapper, DivAbout, DivImageAbout, ImageAbout } from './style'

function AboutUs() {
    return (
        <div className='container-main-project'>
            <AboutUsWrapper>
                <DivAbout>
                    <h1>ABOUT US</h1>
                    <h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe culpa doloribus assumenda deserunt doloremque nemo rerum.
                    </h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nulla quae eos eligendi repellat quod reprehenderit earum dignissimos accusamus fuga. Assumenda nisi provident tempora repellendus omnis a eligendi, quasi maiores.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nulla quae eos eligendi repellat quod reprehenderit earum dignissimos accusamus fuga. Assumenda nisi provident tempora repellendus omnis a eligendi, quasi maiores.
                    </p>
                </DivAbout>
                <DivImageAbout>
                    <ImageAbout src={image} alt="About Us" />
                </DivImageAbout>
            </AboutUsWrapper>
        </div>
    )
}

export default AboutUs