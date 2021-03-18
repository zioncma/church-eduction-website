import { render, screen } from '@testing-library/react';
import { shallow, mount } from "enzyme";
import NewsFeedPage from './NewsFeedPage';

const newsList = [{
  title: "some title",
  content: "some content",
  date: "some date"
}];

it("renders without crashing", () => {
    shallow(<NewsFeedPage newsList={newsList}/>);
  });