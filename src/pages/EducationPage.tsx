import React, { useEffect, useState, useRef } from 'react';
import CardsPageBase from '../components/Cards/CardsPageBase';
import Intro from '../components/Intro/Intro';
import Title from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import { readCourses } from '../lib/loadData';
import { LinearProgress } from '@material-ui/core';

const itemKey = 'courses';

export default function EducationPage({ pageTitle, ...optionals }) {
  const [isLoading, setIsLoading] = useState(true);
  const dataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      dataRef.current = await readCourses();
      setIsLoading(false);
    };

    fetchData().catch((err) => console.error(err));
  }, []);

  return (
    <>
      {isLoading && !dataRef.current ? (
        <LinearProgress color={'secondary'} />
      ) : (
        <CardsPageBase
          itemType={itemKey}
          {...{ pageTitle, cardList: dataRef.current.terms }}
        >
          <Intro bg={dataRef.current.page_banner}>
            <Title text={pageTitle} />
            <Description>{dataRef.current.page_description}</Description>
          </Intro>
        </CardsPageBase>
      )}
    </>
  );
}
