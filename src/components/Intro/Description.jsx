import React from 'react';
import { Typography } from '@material-ui/core';

export default function Description(props) {
    return (
        <Typography>
            {props.children}
        </Typography>
    )
}
