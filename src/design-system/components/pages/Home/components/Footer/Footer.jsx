import { faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FooterWrapper, Li, MadeBy, Ul } from './style'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className='container-main-project'>
                <div>
                    <span>Copyright &#169; 2023 Your company | Design :<MadeBy> Ahmed Mansour</MadeBy></span>
                </div>
                <div>
                    <Ul>
                        <Li>
                            <a href='https://www.facebook.com/ahmed.mask.184'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </Li>
                        <Li>
                            <a href='https://twitter.com/ahmedma66567002'>
                                <FontAwesomeIcon s icon={faTwitter} />
                            </a>
                        </Li>
                        <Li><a href='https://www.linkedin.com/in/ahmed-mansour-b6b407213/'><FontAwesomeIcon icon={faLinkedin} /></a></Li>
                        <Li>
                            <a href='https://www.youtube.com/channel/UC2is6EFgtUfFbDZbbDwYIoQ'>
                                <FontAwesomeIcon style={{ color: "red" }} icon={faYoutube} />
                            </a>
                        </Li>
                    </Ul>
                </div>
            </div>
        </FooterWrapper>
    )
}
