import React from 'react';
import { Typography } from '@material-ui/core';
import Image from "material-ui-image";

export default function Intro(props) {
    return (
        <div>
            <Title />
            <Text />
            <Image src={""} alt="Background Image for Introduction"/>
        </div>
    )
}
