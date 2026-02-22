import React from 'react';
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import { Typography } from '../../components/atomic/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const CourseDescription = styled(Typography)`
  flex: 1 1 100%;
  margin-bottom: 40px;
`;

const CourseGrids = styled(Grid)`
  flex:1 0 50px;
`;

const StyledAccordion = styled(Accordion)`
  padding: 16px;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  flex-wrap: wrap;
`;

export default function ExpandablePaper(props) {
  const { label, courseDescrip } = props;
  return (
    <StyledAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant={'h5'}>{label}</Typography>
      </AccordionSummary>
      <Divider variant='middle'/>
      <StyledAccordionDetails>
        <CourseDescription paragraph>{courseDescrip}</CourseDescription>
        <CourseGrids container spacing={5}>
          {props.children}
        </CourseGrids>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}
