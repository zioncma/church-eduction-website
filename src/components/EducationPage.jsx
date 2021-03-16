import React, { useEffect, useState, useRef } from 'react';
import CardsPageBase from './Cards/CardsPageBase';
import Intro from './Intro';
import Title from './Intro/Title';
import Description from './Intro/Description';
import { readCourses } from '../lib/loadData';
import { LinearProgress } from '@material-ui/core';

const description =
  '培養造就屬靈帶領，讓弟兄姊妹能在神的話語上進深，掌握基本的聖經解釋和查經帶領方法。';
const bg =
  'https://cdn.pixabay.com/photo/2017/03/23/09/08/bible-2167778_960_720.jpg';
const itemKey = 'courses';

export default function EducationPage(props) {
  const { pageTitle } = props;
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
          {...{ pageTitle, bg, cardList: dataRef.current }}
        >
          <Intro bg={bg}>
            <Title text={pageTitle} />
            <Description>{description}</Description>
          </Intro>
        </CardsPageBase>
      )}
    </>
  );
}
