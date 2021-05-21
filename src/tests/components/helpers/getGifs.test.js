import { getGifs } from "../../../helpers/getGifs"

describe('Pruebas con getGifs fetch', () => {

    test("should bring back 10 elements", async() => {


        const gifs = await getGifs("One  Punch");

        expect(gifs.length).toBe(10)

    })


    test("should bring back 10 elements", async() => {


        const gifs = await getGifs("");

        console.log(gifs)

        expect(gifs.length).toBe(0)

    })



})