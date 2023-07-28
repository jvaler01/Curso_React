import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";

export const GifApp = () => {
    const [categories, setCategories] = useState([ 'Star Wars' ]);
    const onAddCategory = ( newCategory ) => {
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifApp</h1>
            <AddCategory onNewCategory={ onAddCategory } />
            <ol>
                {
                    categories.map(item => {
                        return <li key={ item }> { item }</li>
                    })
                }
            </ol>
        </>
    )
}