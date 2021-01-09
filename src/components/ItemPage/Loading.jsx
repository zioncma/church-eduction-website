import React from "react";
import { useEffect, useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import AppContext from "../AppContext";

// Read the item data from JSON and update item context
export default function Loading(props) {
  const { url } = useRouteMatch();
  const { updateIsLoading, updateItem } = useContext(AppContext);
  const { id } = props;

  let items = "";

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    (async () => {
      if (url.includes("course")) {
        // import module for side effects
        const { courses } = await import("../../data/courses");
        items = courses;
      } else if (url.includes("growth")) {
        const { growths } = await import("../../data/growths");
        items = growths;
      }

      return items;
    })().then((items) => {
      //Find data for this component
      const item = items.find(({ itemId }) => itemId === id);

      //close isLoading
      updateIsLoading(false);
      updateItem(item);
    });
  });

  return <></>;
}
