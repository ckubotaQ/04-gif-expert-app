import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
    test('Debe mostrar correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    }),
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['digimon', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
        
    })
    
    

    
})
