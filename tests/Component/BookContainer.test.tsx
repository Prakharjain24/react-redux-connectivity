import React from 'react';
import { mount, shallow } from '../setup/test-setup';
import BookContainer from '../../src/component/BookContainer';
import { BrowserRouter as Router } from 'react-router-dom';


// describe("Addition of number", () => {
//     test('Two plus 2 is four', () => {
//         expect(2+2).toBe(4);
//     });
// });

describe('Render UI', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(
            <BookContainer />
        );
    })

    describe('Book render', () => {
        it('Book title h1 render', () => {
            expect(wrapper.find('#titleBook').text()).toBe('Book Component');
        });
    //     // it('NUmber of books render', () => {
    //     //     expect(wrapper.find('#noOfBook').text()).toBe('Number of Books :');
    //     // });
    // });

    // describe('Counter component', () => {
    //     it('starts with no of book 1', () => {
    //         const text = wrapper.find('h1.titleBook').text();
    //         expect(text).toBe('Book Component')
    //     })

        // it('starts with no of book 1', () => {
        //     const text = wrapper.find('h1.noOfBook').text()
        //     expect(text).toEqual('Number of Books :')
        // })

        // it('can increment the count when the button is clicked', () => {
        //     const incrementBtn = wrapper.find('button')
        //     incrementBtn.simulate('click')
        //     const text = wrapper.find('h2').text()
        //     expect(text).toEqual('Number of Books : 1')
        // })
    })
});