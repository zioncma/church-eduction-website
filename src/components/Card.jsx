import React from 'react';
import Image from "material-ui-image";
import { Button, Typography } from '@material-ui/core';


export default function Card() {
    return (
        <div>
            <Date />
            <Image />
            <Typography className='titile' />
            <Typography className='descrip' />
            <Button> Learn more...</Button>
        </div>
    )
}
