/*import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";*/
import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
    /*const [images, setImages] = useState([]);
    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
    }, []);*/
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className={'card-grid'}>
                {

                    images.map((image) => {
                        return (
                           <GifItem key={image.id} { ...image }/>
                        )
                    })
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}