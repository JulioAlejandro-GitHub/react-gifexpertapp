import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe('Test <GifExpertApp />', () => {



    test('Test: Componente [GifExpertApp]', () => {
        const wrapper = shallow(
            <GifExpertApp defaultCatergories={['dogs']}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Test: Componente [GifExpertApp] listar categorias', () => {
        const categories = ['Goku', 'mickey'];
        const wrapper = shallow(<GifExpertApp defaultCatergories={categories}/>);

        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
});