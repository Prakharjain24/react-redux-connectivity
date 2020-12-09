import * as React from 'react';
// import {mount} from 'enzyme';
// import BookContainer from '../../src/component/BookContainer';
// import {BrowserRouter as Router} from 'react-router-dom';

describe("Addition of number", () => {
    test('Two plus 2 is four', () => {
        expect(2+2).toBe(4);
    });
});

// describe('Book render', () => {
//     it('Book title render', () => {
//         const obj = mount(
//             <Router><BookContainer /></Router>
//         );
//         expect(obj.find('#title').text()).toBe('Book Component');
//     });
//     it('NUmber of books render', () => {
//         const obj = mount(
//             <Router><BookContainer /></Router>
//         );
//         expect(obj.find('#noOfBook').text()).toBe('Number of Books :');
//     });
// });