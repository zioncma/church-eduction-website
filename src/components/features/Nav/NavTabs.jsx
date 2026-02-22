import { isFilledArray } from '../../../utils';
import { useRouter } from 'next/navigation';
import { useTheme } from 'styles';
import { useRef, useState, useEffect } from 'react';
import './NavTabs.css';

/**
 * Default tab: /news
 */
export function NavTabs({ labels, routes, value }) {
  const router = useRouter();
  const theme = useTheme();

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const tabsRef = useRef([]);

  //find which tab should be the active tab
  const currentTab = routes?.find((tabValue) => value === tabValue) || '/news';
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (newValue) => {
    router.push(newValue);
  };

  useEffect(() => {
    if (!isFilledArray(routes)) return;
    const activeIndex = routes.findIndex((r) => r === currentTab);
    const activeTabElement = tabsRef.current[activeIndex];
    
    if (activeTabElement) {
      setIndicatorStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [currentTab, routes]);

  if (!isFilledArray(routes)) {
    return null;
  }

  return (
    <nav
      className="custom-nav-tabs"
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        position: 'relative',
      }}
      role='tablist'
    >
      {isFilledArray(routes)
        ? routes.map((route, index) => {
            const isActive = currentTab === route;
            return (
              <button
                ref={(el) => (tabsRef.current[index] = el)}
                key={'tab-' + index}
                onClick={() => handleChange(route)}
                {...a11yProps(index)}
                style={{
                  color: isActive ? theme.palette.secondary.main : 'inherit',
                  borderBottom: `2px solid transparent`,
                  padding: theme.spacing(1.5, 2),
                  minWidth: theme.spacing(18),
                  fontSize: theme.typography.subtitle1?.fontSize,
                  fontWeight: theme.typography.fontWeightBold,
                  textTransform: 'uppercase', // To mimic MUI Tabs default behavior
                  whiteSpace: 'nowrap',
                  background: 'transparent',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
                className={`text-lg custom-nav-tab`}
                role='tab'
                aria-selected={isActive}
              >
                {labels[index]}
              </button>
            );
          })
        : null}
      <span
        className="custom-nav-indicator"
        style={{
          ...indicatorStyle,
          backgroundColor: theme.palette.secondary.main,
        }}
      />
    </nav>
  );
}

