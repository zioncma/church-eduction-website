import React from 'react'
import { Typography } from 'components/atomic/Typography';

export function Description(props) {
    return (
        <Typography variant="subtitle1" paragraph>{props.text}</Typography>
    )
}
