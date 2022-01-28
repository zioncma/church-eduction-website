import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grow,
} from '@material-ui/core';
import { useStyles } from './Overview';
import {isMobile} from 'react-device-detect';
import { topics } from './topics';


function Topic(props) {
  const {index, topic } = props;
  const isOdd = index % 2 !== 0;
  const bgColorStyle = {
    backgroundColor: isOdd ? '#EEEDE7' : '#E7D2CC',
  };
  const classes = useStyles();

  return (
    <Grid key={'topic-grid-' + index} item>
      <Grow key={'topic-grow-' + index} in {...{ timeout: 1000 }}>
        <Card
          key={'topic-card-' + index}
          className={classes.cardRoot}
          raised
          style={bgColorStyle}
        >
          <CardHeader title={index + 1 + '. ' + topic.title} />
          <CardContent>
            <Typography variant={'body2'}>
              {topic.description}
            </Typography>
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
}

// A topic card with customizable children for content
function CustomTopic(props) {
  const {index, topic } = props;
  const isOdd = index % 2 !== 0;
  const bgColorStyle = {
    backgroundColor: isOdd ? '#EEEDE7' : '#E7D2CC',
  };
  const classes = useStyles();

  return (
    <Grid key={'topic-grid-' + index} item>
      <Grow key={'topic-grow-' + index} in {...{ timeout: 1000 }}>
        <Card
          key={'topic-card-' + index}
          className={classes.cardRoot}
          raised
          style={bgColorStyle}
        >
          <CardHeader title={index + 1 + '. ' + topic.title} />
          <CardContent>
              {props.children}
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
}

export function TopicGroup(props) {
  return (
    <Box my={2}>
      <Grid container spacing={3} justify={isMobile ? 'center' : 'flex-start'}>
        <Topic topic={topics[0]} index={0} />
        <CustomTopic topic={topics[1]} index={1}>
          <Typography variant={'body2'} gutterBottom>⽬的：建立持續穩定的靈修⽣活。</Typography>
          <Typography variant={'body2'} gutterBottom>對象：渴慕改善現有的靈修⽣活及進深認識主。</Typography>
          <Typography variant={'body2'}>⽅式：集體靈修（包括：個⼈細讀經⽂，並同⾏者的具體實踐、分享及禱告）</Typography>
        </CustomTopic>
        <Topic topic={topics[2]} index={2} />
        <Topic topic={topics[3]} index={3} />
        <CustomTopic topic={topics[4]} index={4}>
          <Typography variant={'body2'} gutterBottom>⽬的：建立誠實與神相交的習慣 </Typography>
          <Typography variant={'body2'} gutterBottom>對象：渴慕操練恆切的禱告⽣活</Typography>
          <Typography variant={'body2'} gutterBottom>內容：耶穌的榜樣、禱告是什麼、聖經與禱告、聖靈與禱告、禱告的障礙</Typography>
          <Typography variant={'body2'}>⋯⋯</Typography>
        </CustomTopic>
        <Topic topic={topics[5]} index={5} />
        <Topic topic={topics[6]} index={6} />
      </Grid>
    </Box>
  );
}
