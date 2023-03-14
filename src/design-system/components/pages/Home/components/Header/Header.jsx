import { H3, HeaderWrapper, LearnMore, Register, Title } from "./style";

export default function Header() {
    return (
        <HeaderWrapper>
            <H3 className="H3-in-Header">july 22 - 26 in san francisco, CA</H3>
            <Title className="Title-in-Header">web Design Conference</Title>
            <div>
                <LearnMore>LEARN MORE</LearnMore>
                <Register>REGISTER NOW</Register>
            </div>
        </HeaderWrapper>
    )
}