import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = ({defaultCategories= []}) => {

    // const [categories, setCategories] = useState(["Dragonball"])
    const [categories, setCategories] = useState(defaultCategories)


    return (
        <>
            <h2 className="mB-20">GifExpertApp!!!!!!!!!!!!!!!!!!!!!!!</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

           <ol className="mT-20">
                {
                    categories.map(category =>  (
                        <GifGrid 
                        key={category   }
                        category={category} />
                    ))
                }
           </ol>


        </>
    )
}
