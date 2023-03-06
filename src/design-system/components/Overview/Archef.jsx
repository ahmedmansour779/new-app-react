import { faClock, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import OverView from './OverView';

export default function Archef() {
    return (
        <>
            to app.js
            <OverView icon={faClock} tilte={"24 programs"}>
                {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis qui 
        alias incidunt excepturi amet quisquam odit laboriosam doloribus veritatis. Dolorem ut 
        optio vero architecto magnam delectus odit laudantium autem."`}
            </OverView>
            <OverView icon={faMicrophone} tilte={"11 speakers"}>
                {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis qui 
        alias incidunt excepturi amet quisquam odit laboriosam doloribus veritatis. Dolorem ut 
        optio vero architecto magnam delectus odit laudantium autem."`}
            </OverView>
        </>
    )
}
