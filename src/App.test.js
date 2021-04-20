import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// import App from '../../App'
// import Navigation from '../Navigation'
// import { shallow } from 'enzyme'

// it('my first test', () => {
//   const isTrue = true
//   expect(isTrue).toBe(true)
// })

// import ReactDOM from 'react-dom'
// import { shallow } from 'enzyme'
// import App from './App'

// describe('component App', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<App />, div)
//     ReactDOM.unmountComponentAtNode(div)
//   })
//   it('has an initial state of "{todoItems: hi"}', () => {
//     const wrapper = shallow(<App />)
//     expect(wrapper.state().todoItems).toBe('h')
//   })
//   it('renders the List component', () => {
//     const wrapper = shallow(<App />)
//     const list = wrapper.find('List')
//     expect(list.exists()).toBe(true)
//   })
//   it('updates state appropriately when "add item" button is clicked', () => {
//     const wrapper = shallow(<App />)
//     wrapper.find('.submit-button').simulate('click')
//     expect(wrapper.state().todoItems).toHaveLength(1)
//   })
// })

// import { shallow } from 'enzyme'
// import List from '../components/List'

// describe('component List', () => {
//   it('should render without crashing', () => {
//     const wrapper = shallow(<List />)
//     expect(wrapper.exists()).toEqual(true)
//   })
//   it('should display a message when no props are passed', () => {
//     const wrapper = shallow(<List />)
//     const message = wrapper.find('.message')
//     expect(message.exists()).toEqual(true)
//   })
//   it('should display list items when props are passed', () => {
//     const wrapper = shallow(<List todoItems={['eat breakfast']} />)
//     const todoItems = wrapper.find('.todo-item')
//     expect(todoItems.length).toEqual(1)
//   })
// })

// import React from 'react';
// import Enzyme, { shallow } from 'enzyme'
// import EnzymeAdapter from 'enzyme-adapter-react-16'
// import App from './App';

// Enzyme.configure({ adapter: new EnzymeAdapter() })

// /**
//  * Factory function to create shallow wrapper for the App component
//  * @param {object} props - Component props specific to this setup.
//  * @param {object} state - Initial state for setup
//  * @returns {ShallowWrapper}
// */

// const setup = (props={}, state=null) => {
//   const wrapper = shallow(<App {...props} />)
//   if (state) wrapper.setState(state)
//   return wrapper
// }

// /**
//  * Return ShallowWrapper containing node(s) w/ the given data-test value.
//  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
//  * @param {string} val - Value of data-test attribute for search.
//  * @returns {ShallowWrapper}
//  */
// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`)
// }

// test('renders without crashing', () => {
//  const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'component-app');
//  expect(appComponent.length).toBe(1);
// //  console.log(wrapper.debug())
// // expect(wrapper).toBeTruthy()
// })

// test('renders increment button', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'increment-button');
//   expect(button.length).toBe(1);
// })

// test('renders counter display', () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//   expect(counterDisplay.length).toBe(1);
// })

// test('counter starts at 0', () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state('counter')
//   expect(initialCounterState).toBe(0)
// })

// test('clicking button increments counter display', () => {
// const counter = 7
// const wrapper = setup(null, {counter})

// // find button and click
// const button = findByTestAttr(wrapper, 'increment-button');
// button.simulate('click')
// wrapper.update()

// // display and test value
// const counterDisplay = findByTestAttr(wrapper, 'counter-display')
// expect(counterDisplay.text()).toContain(counter + 1)
// })

// test('clicking button decrements wrapper', () => {
//   const counter = 7
//   const wrapper = setup(null, {counter})

//   const button = findByTestAttr(wrapper, 'decrement-button')
//   button.simulate('click')
//   wrapper.update()

//   const counterDisplay = findByTestAttr(wrapper, 'counter-display')
//   expect(counterDisplay.text()).toContain(counter - 1)
// })
