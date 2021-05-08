import { Tab, Tabs } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

export default function NavTabs(props) {
  const useStyles = makeStyles((theme) => ({
    text: {
      fontSize: "1.1rem",
    },
    navLink: {
      '&:before': {
        content: '',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: '8px',
        // left: '-50%',
        backgroundColor: '#fff',
        opacity: '1',
        transform: '',
      }
    }
  }));
  const classes = useStyles();

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
    >
      {routes.map((route, index) => (
        <Tab
          label={labels[index]}
          value={route}
          component={Link}
          to={route}
          {...a11yProps(index)}
          className={`${classes.text} ${classes.navLink}`}
          key={"tab-" + index}
        />
      ))}
    </Tabs>
  );
}
