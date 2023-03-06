import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Description, OverviewWrapper, Title } from "./Sryles";

export default function OverView({ icon, title, describtion }) {
    return (
        <>
            <OverviewWrapper>
                <div>
                    <FontAwesomeIcon size="2xl" color="#f2545f" icon={icon} />
                </div>
                <Title>{title}</Title>
                <Description>{describtion}</Description>
            </OverviewWrapper>
        </>
    )
}

