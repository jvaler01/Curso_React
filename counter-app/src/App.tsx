import PropTypes from 'prop-types';
import React from "react";

export const App: React.FunctionComponent<AppProps> = ({ title, subTitle, name }) => {

    // console.log(props);

    return (
        <>
            <h1 data-testid="test-title"> { title } </h1>
            {/* <code>{ JSON.stringify( newMessage ) }</code> */}
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}
App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
App.defaultProps = {
    name: 'Reac App',
    subTitle: 'No hay subtítulo',
    // title: 'No hay título',
}
type AppProps = {
    title: string;
    subTitle?: string;
    name: string;
};