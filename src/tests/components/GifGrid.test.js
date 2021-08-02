import React from "react";
import { shallow } from "enzyme";
import {GifGrid} from "../../components/GifGrid";

//llamada a useFetchGifs
import { useFetchGifs } from "../../hooks/useFetchGifs";
// controlar retorno de useFetchGifs
jest.mock("../../hooks/useFetchGifs");

describe('Test <GifGrid />', () => {

    const category = 'Categoria busqueda test';


    test('Test: Componente [GifGrid] toMatchSnapshot()', () => {

        // llama al componente y retorna este valor
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });

        const wrapper = shallow(
            <GifGrid 
                category={category}
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    
    test('Test: Hooks [useFetchGifs] carga img :: use [jest.mock]', () => {
        const gifs = [{
            id:1,
            url:'',
            title:''
        },
        {
            id:2,
            url:'',
            title:''
        }];

        // llama al componente y retorna este valor
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        const wrapper = shallow( <GifGrid category={category} /> );

        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
});