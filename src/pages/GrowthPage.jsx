import React, { useEffect, useState, useRef } from 'react';
import growthbg from '../assets/growthbg.jpg';
import CardsPageBase from '../components/Cards/CardsPageBase';
// import { data } from '../data/growths.json';
import Intro from '../components/Intro';
import Title from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import { Link } from '@material-ui/core';
import { readGrowths } from '../lib/loadData';
import { LinearProgress } from '@material-ui/core';

const itemKey = 'growthcourse';
const contactEmail = 'ce@zioncma.ca';

export default function GrowthPage(props) {
  const { pageTitle } = props;
  const [isLoading, setIsLoading] = useState(true);
  const dataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      dataRef.current = await readGrowths();
      setIsLoading(false);
    };

    fetchData().catch((err) => console.error(err));
  }, []);

  const bg = growthbg;

  return (
    <>
      {isLoading ? (
        <LinearProgress color={'secondary'} />
      ) : (
        <CardsPageBase
          itemType={itemKey}
          {...{ pageTitle, bg, cardList: dataRef.current }}
        >
          <Intro bg={bg}>
            <Title text={pageTitle} />
            <Description>
              如果您對這一系列的新課程有興趣或問題, 請向基教部{contactEmail}{' '}
              <Link href={'mailto:' + contactEmail} style={{ color: 'blue' }}>
                查詢
              </Link>
            </Description>
          </Intro>
        </CardsPageBase>
      )}
    </>
  );
}
