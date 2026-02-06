import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { isFilledArray } from '../../../utils';
import { useRouter } from 'next/navigation';
import { useTheme } from 'styles';

/**
 * Default tab: /news
 */
export function NavTabs({ labels, routes, value }) {
  const router = useRouter();
  const theme = useTheme();

  //find which tab should be the active tab
  const currentTab = routes?.find((tabValue) => value === tabValue) || '/news';

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <Tabs
      value={currentTab}
      variant='scrollable'
      scrollButtons='on'
      aria-label='scrollable auto tabs'
      textColor='secondary'
      indicatorColor='secondary'
    >
      {isFilledArray(routes)
        ? routes.map((route, index) => (
            <Tab
              label={labels[index]}
              value={route}
              onClick={() => {
                router.push(route);
              }}
              {...a11yProps(index)}
              className={`text-lg`}
              key={'tab-' + index}
              sx={{
                fontSize: theme.typography.subtitle1,
                fontWeight: theme.typography.fontWeightBold,
                minWidth: theme.spacing(18),
              }}
            />
          ))
        : null}
    </Tabs>
  );
}
