import React from "react";
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  m: {

  },
}));

export default function ExpandablePaper(props) {
  const { label } = props;
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant={"h5"}>{label}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <Grid container spacing={3}>{props.children}</Grid></ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
