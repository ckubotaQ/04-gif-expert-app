import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {
    const category = "digimon";
    test('debe de retornar el estado inicial', async() => {
        // const {data, loading}= useFetchGifs(category);
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs(category));
        const {data, loading} =result.current;
        await waitForNextUpdate({timeout:3500});
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs(category));
        await waitForNextUpdate({timeout:3500});
        const {data, loading} =result.current;
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();

    })
    
    
})
