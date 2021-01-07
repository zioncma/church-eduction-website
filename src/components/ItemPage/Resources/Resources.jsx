import React from "react";
import File from "./File";
import { Typography, Grid } from "@material-ui/core";


export default function Resources(props) {
  const { files } = props;
  const listFiles = files ? files.map((file, index) => <Grid item><File {...file} /></Grid>) : "";

  return (
    <div>
      <Typography variant="h2">檔案下載</Typography>
      <Grid container spacing={3} alignItems={'center'} justify={'center'}>
        {listFiles}
      </Grid>
    </div>
  );
}
