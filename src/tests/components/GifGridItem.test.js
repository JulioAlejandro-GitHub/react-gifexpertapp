import React from "react";
import { shallow } from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('Test <GifGridItem />', () => {

    const url = 'httls://sdsd';
    const title = 'Title';

    const wrapper = shallow(
        <GifGridItem 
            title={title} 
            url={url} 
        />
    );

    test('Test: Componente toMatchSnapshot()', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Test: Párafo Title", () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test("Test: img alt src", () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test("Test: HTML content className", () => {
        const div = wrapper.find('div');
        const className = 'animate__tada';
        expect( div.prop('className').includes(className) ).toBe(true);
    });
});