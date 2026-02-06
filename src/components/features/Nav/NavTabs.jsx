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

  const handleChange = (event, newValue) => {
    router.push(newValue);
  };

  if (!isFilledArray(routes)) {
    return null;
  }

  // TODO: Tab component has Uncaught ReferenceError: char is not defined error in console, need to be fixed in the future
  // It seems to be a bug from MUI library
  // Only happens in development mode, production build seems fine
  return (
    <Tabs
      value={currentTab}
      variant='scrollable'
      scrollButtons={true}
      aria-label='scrollable auto tabs'
      textColor='secondary'
      indicatorColor='secondary'
      onChange={handleChange}
    >
      {isFilledArray(routes)
        ? routes.map((route, index) => (
            <Tab
              label={labels[index]}
              value={route}
              {...a11yProps(index)}
              className={`text-lg`}
              key={'tab-' + index}
              sx={{
                fontSize: theme.typography.subtitle1?.fontSize,
                fontWeight: theme.typography.fontWeightBold,
                minWidth: theme.spacing(18),
              }}
            />
          ))
        : null}
    </Tabs>
  );
}

