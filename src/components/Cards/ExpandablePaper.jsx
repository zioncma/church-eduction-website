import React from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
//   m: {

//   },
// }));

export default function ExpandablePaper(props) {
  const { label } = props;
  // const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant={"h5"}>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Grid container spacing={3}>{props.children}</Grid></AccordionDetails>
    </Accordion>
  );
}
