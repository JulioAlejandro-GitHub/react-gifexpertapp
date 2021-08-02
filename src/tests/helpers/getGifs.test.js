
import {getGifs} from "../../helpers/getGifs";

describe('Test <getGifs Fetch />', () => {
    test('Test: Cantidad Elementos', async() => {
        const gifs = await getGifs('Goku');
        expect( gifs.length ).toBe(10);
    });

    test('Test: Sin Elementos', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
});