import { useState, useMemo, useEffect } from "react";
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
  const [hasInitialized, setHasInitialized] = useState(false);
  const { newsData: allNews, newsError, isLoading } = useNews(undefined);

  const availableTerms = useMemo(() => {
    if (!terms || !allNews) return [];
    return terms.filter((term) => {
      // Use UTC dates to match Supabase ISO 8601 strings accurately without local timezone shift
      const start = new Date(Date.UTC(term.start_year, term.start_month - 1, 1)).getTime();
      const end = new Date(Date.UTC(term.end_year, term.end_month, 1)).getTime();

      return allNews.some((news) => {
        const newsDate = new Date(news.date).getTime();
        return newsDate >= start && newsDate < end;
      });
    });
  }, [terms, allNews]);

  useEffect(() => {
    // Default to the most recent available term only once on load
    if (!hasInitialized && terms && allNews) {
      if (availableTerms.length > 0) {
        setSelectedTermName(availableTerms[0].name);
        setSelectedTermId(availableTerms[0].id);
      }
      setHasInitialized(true);
    }
  }, [availableTerms, hasInitialized, terms, allNews]);

  const displayNews = useMemo(() => {
    if (!allNews) return [];
    if (!selectedTermId) return allNews; // Show all news if "All" is selected

    const term = availableTerms.find(t => t.id === selectedTermId);
    if (!term) return [];

    const start = new Date(Date.UTC(term.start_year, term.start_month - 1, 1)).getTime();
    const end = new Date(Date.UTC(term.end_year, term.end_month, 1)).getTime();

    return allNews.filter(news => {
      const newsDate = new Date(news.date).getTime();
      return newsDate >= start && newsDate < end;
    });
  }, [allNews, selectedTermId, availableTerms]);

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

  if (isLoading && !hasInitialized) {
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
            itemSet={availableTerms}
            updateTerm={(value) => {
              setSelectedTermName(value)
              const term = availableTerms?.find((t) => t.name === value);
              setSelectedTermId(term?.id);
            }}
            currentTerm={selectedTermName}
          />
        </Box>
        {isLoading
          ? <CenteredContainer><CircularProgress color={'secondary'} /></CenteredContainer>
          : isFilledArray(displayNews) ? renderNews(displayNews) : null}
      </MainGridContainer>
    </ErrorBoundary>
  );
}

export default function NewsPage() {
  return (
    <NewsFeedPage />);
}