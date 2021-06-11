import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
    const category= "digimon";
   
    test('Debe de coincidir con el SS', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true
        })
        const wrapper = shallow(<GifGrid category={category}/>)
             expect(wrapper).toMatchSnapshot();
    });
    test('debe de mostrar items cuando se carga imagen useFecthGifd', () => {
        const imgs = [{
            id: 'abc',
            title:'Digimon',
            url: "://https:localhost/casilo"
        },{
            id: 'abqwwc',
            title:'Digimon',
            url: "://https:localhost/casilo"
        }]
        useFetchGifs.mockReturnValue({ data: imgs, loading: false
        })
        const wrapper = shallow(<GifGrid category={category}/>);
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);

    })
    



})
