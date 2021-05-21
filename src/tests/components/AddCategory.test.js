import { shallow } from "enzyme"
import React from "react"
import { AddCategory } from "../../components/AddCategory"

describe("AddCategory tests", () => {

    const setCategories = jest.fn();
    let wrapper

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />)




    })

    test("should display correctly", () => {
        expect (wrapper).toMatchSnapshot();


    })


    test("should change text box", () => {
        
        const input = wrapper.find("input");
        const value = "Hola Mundo"

        input.simulate("change", {target: {value: value}});


        expect(wrapper.find("p").text().trim() ).toBe(value)
    })



    test("should not post info on submit", () => {
        
        wrapper.find("form").simulate('submit', {preventDefault(){}});


        expect(setCategories).not.toHaveBeenCalled();

    })


})