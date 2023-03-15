import React from 'react'
import { ButtonRegister, Description, InputRegister, RegisterContainer, RegisterForm, RegisterHereWrabber, RegisterText, Text, Title, TitleColor } from './style'

export default function RegisterHere() {
    return (
        <RegisterHereWrabber>
            <div className='container-main-project'>
                <RegisterContainer>
                    <RegisterText>
                        <Title>Register<TitleColor>Here</TitleColor></Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta molestias aperiam cum, aliquam magnam,
                        </Text>
                        <Description>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur facilis ut eius beatae sunt illo architecto, deserunt repudiandae non aliquam repellat nam voluptate nemo exercitationem, hic eum facere! Quo, aliquid!
                        </Description>
                    </RegisterText>
                    <RegisterForm>
                        <InputRegister type="text" placeholder='first name' />
                        <InputRegister type="text" placeholder='last name' />
                        <InputRegister type="numper" placeholder='phone numper' />
                        <InputRegister type="email" placeholder='email address' />
                        <ButtonRegister>supmit</ButtonRegister>
                    </RegisterForm>
                </RegisterContainer>
            </div>
        </RegisterHereWrabber>
    )
}
