
import NewsFeedPage from 'pages/news';
import {EducationPage} from 'pages/course';
import GrowthPage from 'pages/growth';
import {ArchivePage} from 'pages/archive';
// import NoMatchPage from 'pages/NoMatchPage';

//Routing
export const rootPath = '/';

export const ROUTES = [
  {title: '最新消息', path: '/news', component: NewsFeedPage, isInNavBar: true},
  {title: '信徒成長路', path: '/growth', component: GrowthPage, isInNavBar: true},
  {title: '主日學', path: '/course', component: EducationPage, isInNavBar: true},
  {title: 'Podcast / 聲音檔', path: '/archive', component: ArchivePage, isInNavBar: true},
];

export const mainPageTitles = ROUTES.map(i => i.title);
export const allTabs = ROUTES.map(i => i.path);