import React from 'react';
import { Typography } from '../../components/atomic/Typography';

export default function Description(props) {
    return (
        <Typography>
            {props.children}
        </Typography>
    )
}
