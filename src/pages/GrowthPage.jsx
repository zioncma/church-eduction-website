import growthbg from '../assets/growthbg.jpg';
import CardsPageBase from '../components/Cards/CardsPageBase';
import Intro from '../components/Intro';
import Title from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import { Link } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';
import { useGrowthList } from '../features/npoint/hooks';

const itemKey = 'growthcourse';
const CONTACT_EMAIL = 'ce@zioncma.ca';

export default function GrowthPage({ pageTitle, ...optionals }) {
  const { growthData, isLoading, error } = useGrowthList();

  if (error) {
    console.error(error);
    return (
      <div>{`Error! ${error?.message} Please refresh or contact administrators`}</div>
    );
  }

  if (isLoading) {
    return <LinearProgress color={'secondary'} />;
  }

  const bg = growthbg;

  return (
    <>
      <CardsPageBase
        itemType={itemKey}
        {...{ pageTitle, bg, cardList: growthData }}
      >
        <Intro bg={bg}>
          <Title text={pageTitle} />
          <Description>
            如果您對這一系列的新課程有興趣或問題, 請向基教部{CONTACT_EMAIL}{' '}
            <Link href={'mailto:' + CONTACT_EMAIL} style={{ color: 'blue' }}>
              查詢
            </Link>
          </Description>
        </Intro>
      </CardsPageBase>
    </>
  );
}
