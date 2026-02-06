import { useState } from "react";
import { Intro } from "components/Intro";
import { Box } from '../components/atomic/Container';
import { Link } from '../components/atomic/Link';
import Filter from "components/NewsFeedPage/Filter";
import MainGridContainer from "components/MainGridContainer";
import PageHeaderTitle from "components/Intro/Title";
import Description from "components/Intro/Description";
import { NewsItem } from "../components/NewsFeedPage/NewsItem";
import { ErrorBoundary } from '../features/error-handling';
import { useNews, useTerms } from "../domain";
import { CenteredContainer } from "../components/atomic/CenteredContainer";
import CircularProgress from "@mui/material/CircularProgress";
import { isFilledArray } from "../utils";

export function renderNews(items) {
  if (!items || items.length === 0) {
    return null;
  }
  // console.debug("renderNews", items);

  return (
    <ErrorBoundary>
      {items.map((news, i) => (
        <NewsItem key={"news-" + i} {...news} />
      ))}
    </ErrorBoundary>
  );
}

const CONTACT_EMAIL = "ce@zioncma.ca";
const pageTitle = "最新消息";

export function NewsFeedPage() {
  const { terms, error: termError } = useTerms();
  console.debug("terms", terms);

  const [selectedTermName, setSelectedTermName] = useState(undefined);
  const [selectedTermId, setSelectedTermId] = useState<string | undefined>(undefined);
  const { newsData, newsError, isLoading } = useNews(selectedTermId);

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   const termsData = await fetchTerms2();
  //   //   setTerms(termsData.map((t) => t.name));
  //   //   setSelectedTerm(termsData[0]?.name);
  //   // }
  //   // fetchData();
  // }, []);

  if (termError) {
    return (
      <div>{`Error! ${termError?.message} Please refresh or contact administrators`}</div>
    );
  }
  if (newsError) {
    return (
      <div>{`Error! ${newsError?.message} Please refresh or contact administrators`}</div>
    );
  }

  if (isLoading) {
    return <CenteredContainer><CircularProgress color={'secondary'} /></CenteredContainer>;
  }


  return (
    <ErrorBoundary>
      <Intro>
        <PageHeaderTitle text={pageTitle} />
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
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <Filter
            itemSet={terms}
            updateTerm={(value) => {
              setSelectedTermName(value)
              const term = terms?.find((t) => t.name === value);
              setSelectedTermId(term?.id);
            }}
            currentTerm={selectedTermName}
          />
        </Box>
        {isFilledArray(newsData) ? renderNews(newsData) : null}
      </MainGridContainer>
    </ErrorBoundary>
  );
}

export default function NewsPage() {
  return (
    <NewsFeedPage />);
}