import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";
describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
 let wrapper = shallow(<AddCategory setCategories={setCategories}/> )
 beforeEach(()=>{
     jest.clearAllMocks()
wrapper = shallow(<AddCategory setCategories={setCategories}/>)
 }); 
 
 
 test('debe de mostrarse correctamente', () => {
       
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de cambiar la caja de texto', () => {
        const input= wrapper.find('input');
        const value= "hola mundo";
        input.simulate('change',{
            target: {value}
    });
    expect(wrapper.find('p').text().trim(   )).toBe(value)
    }); 
    test('NO debe de postear la informacion unsubmit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} })
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
        //1. simular el input change
        //2. simular el submit
        //3. setCategories se debe de haber llamado
        //4. el valor del input debe de estar 'void'
        const input= wrapper.find('input');
        const value= "hola mundo";
        input.simulate('change',{
            target: {value}
    });
    wrapper.find('form').simulate('submit',{ preventDefault(){} })
    expect(setCategories).toHaveBeenCalled();
    expect(input.prop('value')).toBe('');
    })
    
    
    
    
})
