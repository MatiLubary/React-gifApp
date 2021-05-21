import React from 'react'
import { shallow } from 'enzyme';
import {GifGrid} from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {
    
    const category = "Dragonball";

    test('should display <GifGrid /> correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
            
        const wrapper = shallow( <GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot()

    });


    test('should display items when images are loaded', () => {

        const gifs = [{
            id: "abc",
            url: "https://localhost/wharever/cosa.jpg",
            title: "whareever"
        }]

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
            
        const wrapper = shallow( <GifGrid category={category} /> )

        expect(wrapper).toMatchSnapshot


   
    });

})