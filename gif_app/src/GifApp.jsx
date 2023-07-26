import {useState} from "react";

export const GifApp = () => {
    const [catedories, setCatedories] = useState([ 'Star Wars' ]);
    const onAddCategory = () => {
        setCatedories([...catedories, 'CyberPunk'])
    }

    return (
        <>
            <h1>GifApp</h1>
            <button onClick={onAddCategory}>Add category</button>
            <ol>
                {
                    catedories.map(item => {
                        return <li key={ item }> { item }</li>
                    })
                }
            </ol>
        </>
    )
}