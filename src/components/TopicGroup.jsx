import React from 'react';
import { Grid, Card, CardHeader, CardContent, Grow } from '@mui/material';
import { Typography } from '../components/atomic/Typography';
import { Box } from './atomic/Container';
import { Grid2 } from './atomic/Grid';
import { isMobile } from 'react-device-detect';
import { topics } from './topics';
import { muiTheme } from '../styles';


// A topic card with customizable children for content
function CustomTopic(props) {
  const { index, topic } = props;
  const isOdd = index % 2 !== 0;
  const bgColorStyle = {
    backgroundColor: isOdd ? '#EEEDE7' : '#E7D2CC',
  };
  const theme = muiTheme;

  return (
    <Grid2 key={'topic-grid-' + index}>
      <Grow key={'topic-grow-' + index} in {...{ timeout: 1000 }}>
        <Card
          key={'topic-card-' + index}
          raised
          style={bgColorStyle}
          sx={{
            width: theme.spacing(35),
            height: theme.spacing(36),
            borderRadius: 6,
          }}
        >
          <CardHeader title={index + 1 + '. ' + topic.title} />
          <CardContent>{props.children}</CardContent>
        </Card>
      </Grow>
    </Grid2>
  );
}

function SimpleTopic({ topicIndex, topicContent }) {
  return (
    <CustomTopic topic={topicContent} index={topicIndex}>
      <Typography variant={'body2'}>{topicContent.description}</Typography>
    </CustomTopic>
  );
}

export function TopicGroup() {
  return (
    <Box my={2} className={'topic-group-container'}>
      <Grid2 container spacing={2} sx={{
        justifyContent: isMobile ? 'center' : 'flex-start',
      }}>
        <CustomTopic topic={topics[0]} index={0}>
          <Typography variant={'body2'}>{topics[0].description}</Typography>
        </CustomTopic>
        <CustomTopic topic={topics[1]} index={1}>
          <Typography variant={'body2'} gutterBottom>
            ⽬的：建立持續穩定的靈修⽣活。
          </Typography>
          <Typography variant={'body2'} gutterBottom>
            對象：渴慕改善現有的靈修⽣活及進深認識主。
          </Typography>
          <Typography variant={'body2'}>
            ⽅式：集體靈修（包括：個⼈細讀經⽂，並同⾏者的具體實踐、分享及禱告）
          </Typography>
        </CustomTopic>
        <CustomTopic topic={topics[2]} index={2}>
          <Typography variant={'body2'}>{topics[2].description}</Typography>
        </CustomTopic>
        <CustomTopic topic={topics[3]} index={3}>
          <Typography variant={'body2'}>{topics[3].description}</Typography>
        </CustomTopic>
        <CustomTopic topic={topics[4]} index={4}>
          <Typography variant={'body2'} gutterBottom>
            ⽬的：建立誠實與神相交的習慣
          </Typography>
          <Typography variant={'body2'} gutterBottom>
            對象：渴慕操練恆切的禱告⽣活
          </Typography>
          <Typography variant={'body2'} gutterBottom>
            內容：耶穌的榜樣、禱告是什麼、聖經與禱告、聖靈與禱告、禱告的障礙
          </Typography>
          <Typography variant={'body2'}>⋯⋯</Typography>
        </CustomTopic>
        <SimpleTopic topicContent={topics[5]} topicIndex={5} />
        <SimpleTopic topicContent={topics[6]} topicIndex={6} />
      </Grid2>
    </Box>
  );
}
