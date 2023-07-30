import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'Star Wars' ]);
    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory
                onNewCategory={ onAddCategory }
            />
            {
                categories.map(item => {
                    return (
                        <GifGrid key={item} category={item}/>
                    )
                })
            }
        </>
    )
}