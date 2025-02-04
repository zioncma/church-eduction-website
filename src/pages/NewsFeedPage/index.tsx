import { useEffect, useState } from "react";
import NewsItem from "components/NewsFeedPage/NewsItem";
import Intro from "components/Intro/Intro";
import { Grid, Box, Link, Typography, LinearProgress } from "@material-ui/core";
import Filter from "components/NewsFeedPage/Filter";
import MainGridContainer from "components/MainGridContainer";
import Title from "components/Intro/Title";
import Description from "components/Intro/Description";
import { useNewsList } from "lib/hooks";
import { getTermSet, getGroupNames, filterByTerm } from "./processors";
import NewsItemFirebase from "../../components/NewsFeedPage/NewsItemFirebase";
import db from "features/firebase/Firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

export function renderNews(items) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((news, i) => (
        <Grid key={"news-grid-" + i} item xs={12}>
          <NewsItemFirebase key={"news-" + i} {...news} />
        </Grid>
      ))}
    </>
  );
}

const CONTACT_EMAIL = "ce@zioncma.ca";

async function fetchTerms() {
  const querySnapshot = await getDocs(
    query(collection(db, "terms"), orderBy("index", "desc"))
  );
  const termsData = querySnapshot.docs.map((doc) => doc.data());
  return termsData;
}

export default function NewsFeedPage({ pageTitle }) {
  //firebase
  const [terms, setTerms] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(undefined);
  const path = `content/SundaySchool/${selectedTerm}`;

  useEffect(() => {
    async function fetchData() {
      const termsData = await fetchTerms();
      setTerms(termsData.map((t) => t.name));
      setSelectedTerm(termsData[0]?.name);
    }
    fetchData();
  }, []);

  const [course, setCourse] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, path), orderBy("createAt", "desc")),
        (snapshot) => setCourse(snapshot.docs.map((doc) => doc.data()))
      ),
    [path]
  );

  // Local state
  // const [term, setTerm] = useState("二零二三年冬季主日學");

  // if (error) {
  //   return (
  //     <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>
  //   );
  // }

  // if (isLoading) {
  //   return <LinearProgress color={"secondary"} />;
  // }
  // console.debug('newsList', newsList);

  return (
    <>
      <Intro>
        <Title text={pageTitle} />
        <Description>
          歡迎來到宣道會錫安堂基教部的網頁。在這裏你可以得到有關主日學的最新消息，下載和重温過去的主日學。如對錫安堂的基督教教育有任何意見，歡迎通過
          {CONTACT_EMAIL}{" "}
          <Link href={`mailto:${CONTACT_EMAIL}`} style={{ color: "blue" }}>
            聯絡我們
          </Link>
          。
        </Description>
      </Intro>
      <MainGridContainer>
        <Box display="flex" justifyContent="flex-end" width={"100%"}>
          <Filter
            itemSet={terms}
            updateTerm={(value) => setSelectedTerm(value)}
            currentTerm={selectedTerm}
          />
        </Box>
        {course && course?.length > 0 && renderNews(course)}
      </MainGridContainer>
    </>
  );
}
