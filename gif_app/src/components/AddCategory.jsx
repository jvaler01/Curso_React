import {useState} from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories( categories => [...categories, inputValue]);
        onNewCategory(inputValue);
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}