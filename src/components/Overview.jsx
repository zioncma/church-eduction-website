import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Container,
  Grow,
  Button,
  Link
} from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    width: theme.spacing(35),
    height: theme.spacing(36),
    borderRadius: 15,
  },
  sectionHeading: {
    backgroundColor: "bisque",
    paddingLeft: theme.spacing(2),
    fontSize: theme.spacing(4),
  }
}));

function TopicGroup(props) {
  const { topics } = props;
  const classes = useStyles();
  return (
    <Box my={2}>
      <Grid container spacing={3}>
        {topics.map((topic, index) => {
          const isOdd = index % 2 !== 0;
          const bgColorStyle = {
            backgroundColor: isOdd ? "#EEEDE7" : "#E7D2CC",
          };
          return (
            <Grid key={"topic-grid-" + index} item>
              <Grow key={"topic-grow-" + index} in {...{ timeout: 1000 }}>
                <Card key={"topic-card-" + index} className={classes.cardRoot} raised style={bgColorStyle}>
                  <CardHeader title={index + 1 + ". " + topic.title} />
                  <CardContent>
                    <Typography variant={"body2"}>
                      {topic.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default function Overview() {
  const topics = [
    {
      title: "關係重整 - 與神與⼈",
      description:
        "信了耶穌後，很多⼈會問：我應該做什麼？其實基督徒並不是⼀個⼈的事情，聖經的教導也不是⼀堆規條，⽽是重整我們的關係：我們和神的關係，我們和弟兄姊妹的關係，我們和世⼈的關係。讓我們⼀起探討和經歷！考慮受浸的弟兄姐妹務必參加。",
    },
    {
      title: "從靈修到⽣命成長",
      description:
        "⽬的：建立持續穩定的靈修⽣活。 對象：渴慕改善現有的靈修⽣活及進深認識主。⽅式：集體靈修（包括：個⼈細讀經⽂，並同⾏者的具體實踐、分享及禱告）",
    },
    {
      title: "成長中的信徒⽣活",
      description:
        "這課程針對弟兄姊妹以經過與神、與⼈的關係重整為基礎，去建構具體的信仰⽣活。課程 簡介如何實踐教會的五⼤⽬標，包括敬拜、真理學習、相交、傳褔⾳及服侍，並會涉及如 何以聖經原則應⽤於實際⽣活包括⾦錢運⽤、奉獻及時間運⽤。課程最終⽬標是⿎勵弟兄 姊妹導向得勝的⽣命。",
    },
    {
      title: "查考神的救贖計劃",
      description:
        "我們會從舊約和新約裏選讀宏觀認識神的救贖計劃，從⽽更加明⽩神救贖的恩典。⽽且我們也可以藉此學習如何查考聖經，和增加對新舊約⼀些基本的認識。希望學員完成課程後，可以⾃⼰讀經的時候更容易明⽩聖經。",
    },
    {
      title: "禱告學堂",
      description:
        "⽬的：建立誠實與神相交的習慣 對象：渴慕操練恆切的禱告⽣活 內容：耶穌的榜樣、禱告是什麼、聖經與禱告、聖靈與禱告、禱告的障礙 ⋯⋯",
    },
    {
      title: "舊約概覽",
      description:
        "這是⼀個舊約概覽課程，我們會⼀起學習舊約和了解其中⼼信息。 從神的創造，⼈犯罪 背叛神，但神沒有離棄⼈，神如何透過約和應許，揀選以⾊列⺠，透過⼀個⺠族，他的歷 史演變，從⽽對神的救恩計劃有⼀個清晰的觀念，成為⽇後進⼀步研讀聖經的基礎。",
    },
    {
      title: "新約概覽",
      description:
        "這是⼀個新約概覽課程，我們會⼀起學習新約和了解其中⼼信息: 從耶穌和⾨徒的經歷，從使徒和教會的同⾏，從耶穌和使徒的教導認識神的真理多⼀些，並且效法他們！",
    },
  ];
  const classes = useStyles();

  return (
    <Container>
      <Typography variant={"h2"} className={classes.sectionHeading}>課程簡介</Typography>
      <TopicGroup topics={topics} />
      <Box mt={4}>
        <Typography>
          *如果您對這⼀系列的新課程有興趣或問題，請向以下任何⼀個弟兄姊妹查詢：
          Angela Leung, Ernest Lo, Francis Wong, Raymond Lai
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} mt={6}>
      <Button variant="contained" size="large" endIcon={<CloudDownloadIcon />} href={"https://drive.google.com/file/d/1LN9OgC8tnLO_T5vhzyNumoEu860TSppl/view?usp=sharing"} target="_blank" rel="noopener"> 下載課程簡介</Button>
      </Box>
    </Container>
  );
}
