import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async() => {
       const gifs = await getGifs('Dr. stone');
       expect(gifs.length).toBe(10);
    });
    test('debe de traer 0 elementos, si el argumento es vacio', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
     });
    
    
})
