import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Description, OverviewWrapper, Title } from "./Styles";

export default function OverView({ icon, title, describtion }) {
    return (
        <>
            <div className="container-main-project">
                <OverviewWrapper>
                    <div>
                        <FontAwesomeIcon size="2xl" color="#f2545f" icon={icon} />
                    </div>
                    <Title>{title}</Title>
                    <Description>{describtion}</Description>
                </OverviewWrapper>
            </div>
        </>
    )
}

