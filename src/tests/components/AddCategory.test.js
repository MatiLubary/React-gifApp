import { shallow } from "enzyme"
import React from "react"
import { AddCategory } from "../../components/AddCategory"
import { wrap } from "module";

describe("AddCategory tests", () => {

    const setCategories = jest.fn();
    let wrapper;

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
        
        wrapper.find("form").simulate('submit', { preventDefault(){} });


        expect(setCategories).not.toHaveBeenCalled();

    })



    test("Should call the setCategories and leave the text box blank", () => {
        
        // 1. simular el inputChange
        // 2. simular el submit
        // 3. setCategories se debe haber llamado
        // 4. el valor del input debe estar ""


        const value = "random"

        wrapper.find("input").simulate("change", {target: {value} });

        wrapper.find("form").simulate("submit", {preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));



        expect(wrapper.find("input").prop("value")).toBe("")

    })


})