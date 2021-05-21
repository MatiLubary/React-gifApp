import React from 'react'
import {GifGridItem} from '../../components/GifGridItem';
import { shallow } from 'enzyme';


describe('Pruebas en <GifGridItem />', () => {

    const title = "un titulo";
    const url = "https://localhost/algo.jpg"
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);
    

    test('should display <GifGridItem /> correctly', () => {
            

        expect(wrapper).toMatchSnapshot();
    });


    test('should have a paragrapgh with a title', () => {
            
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);


    });

    test('should have img equal to url and alt of props', () => {
            
        const img = wrapper.find("img");
        console.log(img.props().src)

        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);

    });

    test('should havethe animate fade in class', () => {
            
        const div = wrapper.find("div");
        console.log(div.props())

        
        expect(div.hasClass("animate__backInLeft")).toBe(true);

    });


})