import CommonTemplate from '../components/template/CommonTemplate';
import { NewsFeedPage } from './news';

function HomePage() {
  return (
  <CommonTemplate>
    <NewsFeedPage />
  </CommonTemplate>);
  // return (<NewsFeedPage />);
}

export default HomePage;