import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import {AddCategory} from "../../components/AddCategory";

describe('Test <AddCategory />', () => {

    //const setCategories = () => {};
    const setCategories = jest.fn();

    //console.log(setCategories);

    let wrapper = shallow(
        <AddCategory setCategories={setCategories} />
    );

    beforeEach( () => {
        jest.clearAllMocks();
        
        wrapper = shallow(
            <AddCategory setCategories={setCategories} />
        );
    });

    test('Test: Componente AddCategory toMatchSnapshot()', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test("Test: HTML input simulate [change]", () => {
        const input = wrapper.find('input');
        const value = 'Hola';

        //input.simulate('change');
        input.simulate('change', { target: {value} });
        expect( wrapper.find('p').text().trim() ).toBe(value);
    });
    
    test("Test: Simulate [Submit]", () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test("Test: call [setCategories] && input text", () => {
        const value = 'Hola';
        //const input = wrapper.find('input');
        //input.simulate('change', { target: {value} });
        wrapper.find('input').simulate('change', { target: {value} });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        //expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenLastCalledWith( expect.any(Function) );
        //expect( wrapper.find('input').text().trim() ).toBe('');
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});