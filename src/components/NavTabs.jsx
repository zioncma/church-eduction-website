import { Tab, Tabs } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function NavTabs(props) {
  const useStyles = makeStyles((theme) => ({
    text: {
      fontSize: '1.1rem',
    },
  }));
  const classes = useStyles();

  const allTabs = props.routes;
  //find which tab should be the active tab
  const currentTab = allTabs.find((tabValue) => props.value.includes(tabValue));


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
      scrollButtons="auto"
      aria-label="scrollable auto tabs"
    >
      <Tab label="最新信仰" value={allTabs[0]} component={Link} to={allTabs[0]} {...a11yProps(0)} className={classes.text} />
      <Tab label="信仰成長路" value={allTabs[1]} component={Link} to={allTabs[1]} {...a11yProps(1)} className={classes.text} />
      <Tab label="成人主日学" value={allTabs[2]} component={Link} to={allTabs[2]} {...a11yProps(2)} className={classes.text} />
    </Tabs>
  );
}
