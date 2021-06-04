import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem>', () => {
    const title= 'Prueba Bojack'; 
        const url= 'https://localhost:/alo.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );
    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un parrafo con el title ', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
        
    });
    test('debe de obtener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log(img.props('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('debe tener la clase animate__bounce', () => {
        const div = wrapper.find('div');
        const classname =div.prop('className');
        expect(classname.includes('animate__bounce')).toBe(true);
    })
    
    
})
