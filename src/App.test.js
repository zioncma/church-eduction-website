/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, mount } from "enzyme";
import Nav from './components/Nav';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  shallow(<App />);
});