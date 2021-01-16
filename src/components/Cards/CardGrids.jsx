import React from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@material-ui/core";
import { AppContextProvider } from "../AppContext";
import ExpandablePaper from "./ExpandablePaper";

function CardGridList(props) {
  return (
    <>
      {props.items.map((data, index) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={"card-grid-" + index}>
          <CustomCard key={"card-" + index} {...data} />
        </Grid>
      ))}
    </>
  );
}

export default function CardGrids(props) {
  const { cardList, itemType } = props;
  const terms = cardList.map((data) => data.term);
  const titleToCoursesMap = generateTitleToCoursesMap(terms);
  const titlesArray = [...titleToCoursesMap.keys()];

  // // temp condition
  // if (itemType !== "growthcourse") {
  //   return null;
  // }

  return (
    <>
      <AppContextProvider>
        {titlesArray.map((title, index) => (
          <Grid container item xs={12} key={"grid-panel" + index}>
            <ExpandablePaper label={title} key={"expandable-" + index}>
              <CardGridList items={titleToCoursesMap.get(title)} />{" "}
            </ExpandablePaper>
          </Grid>
        ))}
      </AppContextProvider>
    </>
  );
}

function generateTitleToCoursesMap(terms) {
  let titleMapObject = new Map();
  for (const term of terms) {
    let courseList = term.courses;
    let preCourseTitle = courseList[0].title;
    let courseSerie = []; // all classes in the same title
    for (const course of courseList) {
      if (course.title === preCourseTitle) {
        // add this course to courseSerie
        courseSerie.push(course);
      } else {
        // put courseSerie in the map
        titleMapObject.set(course.title, courseSerie);
        courseSerie = [];
        preCourseTitle = course.title;
      }
      titleMapObject.set(course.title, courseSerie);
    }
  }
  return titleMapObject;
}
