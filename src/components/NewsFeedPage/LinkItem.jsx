import React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { Typography } from '../../components/atomic/Typography';
import LinkIcon from '@mui/icons-material/Link';
import { useTheme } from "styles";

LinkItem.propTypes = {
  text: PropTypes.string,
  address: PropTypes.string.isRequired,
};

/**
 * Container of link buttons
 */
export default function LinkItem({ address, text = "訪問鏈接" }) {
  const theme = useTheme();
  return (
    <Grid>
      <Button
        variant="contained"
        href={address}
        size="large"
        startIcon={<LinkIcon />}
        style={{whiteSpace: 'nowrap', padding: '0.8rem 1rem'}}
        sx={{
          backgroundColor: theme.palette.buttonBg,
          color: theme.palette.primary.main,
        }}
      >
        <Typography variant={'subtitle1'} style={{fontWeight: '500'}}>{text}</Typography>
      </Button>
    </Grid>
  );
}
