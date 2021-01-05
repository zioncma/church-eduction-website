import React from 'react';
import { Typography, Box } from "@material-ui/core";

export default function Title(props) {
    return (
        <>
            <Typography variant={"h1"}>{props.text}</Typography>
        </>
    )
}
