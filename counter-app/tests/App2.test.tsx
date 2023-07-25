/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { render, screen } from '@testing-library/react';
import { App } from '../src/App';
import React from 'react';

describe('Pruebas en <FirstApp />', () => {
    const title    = 'Hola';
    const subTitle = 'No hay subtítulo';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <App title={title} name={''} /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        render( <App title={title} name={''} /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render( <App title={title} name={''} /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render( 
            <App 
                title={title}
                subTitle={subTitle} name={''}            />  
        );
        expect( screen.getAllByText(subTitle).length ).toBe(2);
    });
});