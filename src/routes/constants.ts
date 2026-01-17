// import NoMatchPage from 'pages/NoMatchPage';

//Routing
export const rootPath = '/';

export const ROUTES = [
  {title: '最新消息', path: '/news', isInNavBar: true},
  {title: '信徒成長路', path: '/growth', isInNavBar: true},
  {title: '主日學', path: '/course', isInNavBar: true},
  {title: 'Podcast / 聲音檔', path: '/archive', isInNavBar: true},
];

export const mainPageTitles = ROUTES.map(i => i.title);
export const allTabs = ROUTES.map(i => i.path);