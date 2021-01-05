import { render, screen } from '@testing-library/react';
import { shallow, mount } from "enzyme";
import NewsItem from './NewsItem';

const item =     {
    title: "some title1",
    content: "some content1",
    date: "12/12/2020",
  };

it("renders without crashing", () => {
    shallow(<NewsItem {...item}/>);
});