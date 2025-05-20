import growthbg from 'styles/assets/growthbg.jpg';
import Intro from '../components/Intro/Intro';
import PageHeaderTitle from '../components/Intro/Title';
import Description from '../components/Intro/Description';
import { Link } from '../components/atomic/Link';
import LinearProgress from '@mui/material/LinearProgress';
import { useGrowthList } from '../features/npoint/hooks';
import MainGridContainer from '../components/MainGridContainer';
import { Overview } from '../components/Overview';
import CommonTemplate from '../components/template/CommonTemplate';

const CONTACT_EMAIL = 'ce@zioncma.ca';

/**
 * 信徒成長路
 */
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

  const bg = growthbg.src;

  return (
    <CommonTemplate>
      <Intro bg={bg}>
        <PageHeaderTitle text={pageTitle} />
        <Description>
          如果您對這一系列的新課程有興趣或問題, 請向基教部{CONTACT_EMAIL}{' '}
          <Link href={'mailto:' + CONTACT_EMAIL} style={{ color: 'blue' }}>
            查詢
          </Link>
        </Description>
      </Intro>
      <MainGridContainer>
        <Overview />
      </MainGridContainer>
    </CommonTemplate>
  );
}
