
import {renderHook} from '@testing-library/react-hooks'
import {useFetchGifs} from "../../hooks/useFetchGifs";

describe('Test Hook [useFetchGifs]', () => {
    test('Test: return [Estado Inicial]', async() => {
        //const {data:images, loading} = useFetchGifs('category');

        // componente virtual
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Tom') );
        const {data:images, loading} = result.current;
        await waitForNextUpdate();
        
        expect( images ).toEqual([]);
        expect( loading ).toBe(true);
    });
    test('Test: return [array img, loading false]', async() => {
        //const {data:images, loading} = useFetchGifs('category');

        // componente virtual
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('gatos') );
        await waitForNextUpdate();
        
        //waitForNextUpdate :: ya cambio el estado...
        const {data:images, loading} = result.current;
        expect( images.length ).toEqual(10);
        expect( loading ).toBe(false);
    });
});