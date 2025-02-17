import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import {Typography} from '../../components/atomic/Typography';
import LinkIcon from '@mui/icons-material/Link';

LinkItem.defaultProps = {
  text: "訪問鏈接",
};

LinkItem.propTypes = {
  text: PropTypes.string,
  address: PropTypes.string.isRequired,
};

export default function LinkItem(props) {
  const { address, text } = props;
  return (
    <Grid item>
      <Button
        variant="contained"
        href={address}
        size="large"
        startIcon={<LinkIcon />}
        style={{whiteSpace: 'nowrap', padding: '0.8rem 1rem'}}
        // color="primary"
      >
        <Typography variant={'subtitle1'} style={{fontWeight: '500'}}>{text}</Typography>
      </Button>
    </Grid>
  );
}
