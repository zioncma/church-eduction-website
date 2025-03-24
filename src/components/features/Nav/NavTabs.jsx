import { Link } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export function NavTabs(props) {

  const { labels, routes } = props;
  
  //find which tab should be the active tab
  const currentTab = routes.find((tabValue) => props.value.includes(tabValue));

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
      {routes.map((route, index) => (
        <Tab
          label={labels[index]}
          value={route}
          component={Link}
          to={route}
          {...a11yProps(index)}
          className={`text-lg`}
          key={"tab-" + index}
        />
      ))}
    </Tabs>
  );
}
