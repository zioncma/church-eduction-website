// import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { isFilledArray } from '../../../utils';
import { useRouter } from 'next/navigation'

/**
 * Default tab: /news
 */
export function NavTabs({ labels, routes, value }) {
  const router = useRouter();

  //find which tab should be the active tab
  const currentTab = routes.find((tabValue) => value === tabValue) || '/news';

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Tabs
      value={currentTab}
      variant="scrollable"
      scrollButtons="on"
      aria-label="scrollable auto tabs"
      textColor="secondary"
      indicatorColor="secondary"
    >
      {isFilledArray(routes) ? routes.map((route, index) => (
        <Tab
          label={labels[index]}
          value={route}
          // component={Link}
          onClick={() => {
            router.push(route);
          }}
          // herf={route}
          {...a11yProps(index)}
          className={`text-lg`}
          key={"tab-" + index}
        />
      )) : null}
    </Tabs>
  );
}
