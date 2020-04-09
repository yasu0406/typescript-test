import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


test('renders without eorror', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-big-component']");
  expect(appComponent.length).toBe(1)
});
test('renders increment button', () => {

});
test('renders counter display', () => {

});
test('counter starts at 0', () => {

});
test('clicking button increments counter display', () => {

});