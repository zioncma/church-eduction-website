import React from 'react';
import { Typography } from 'components/atomic/Typography';
import { Box } from 'components/atomic/Container';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import { PropTypes } from 'prop-types';
import { blue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { muiTheme } from 'styles';

File.propTypes = {
  title: PropTypes.string.isRequired,
  doc: PropTypes.string,
};

export default function File({ title = '', doc = '', ...optionals }) {
  //className={classes.container}
  const theme = muiTheme;
  return (
    <Box width={130} sx={{
      lineHeight: "1rem",
      "& > *": {
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "1rem",
      },
    }}>
      <DescriptionIcon style={{ color: blue[500] }} fontSize='small' />
      <Typography component='span'>{title}</Typography>
      <Button
        variant='contained'
        href={doc}
        size='small'
        endIcon={<CloudDownloadIcon />}
        sx={{
          backgroundColor: theme.palette.buttonBg,
          color: theme.palette.primary.main,
        }}
      >
        Download
      </Button>
    </Box>
  );
}
