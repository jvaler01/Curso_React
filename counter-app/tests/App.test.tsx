/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { render } from '@testing-library/react';
import { App } from '../src/App';
import React from 'react';

describe('Pruebas en <FirstApp />', () => {
    
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola';
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();

    // });

    test('debe de mostrar el título en un h1', () => {
        const title = 'Hola';
        const { container, getByText, getByTestId } = render( <App title={title} name={''} /> );
        expect( getByText(title) ).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )
        expect( getByTestId('test-title').innerHTML ).toContain(title)
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola';
        const subTitle = 'No hay subtítulo';
        const { getAllByText } = render( 
            <App 
                title={title}
                subTitle={subTitle} name={''}            /> 
        );
        expect( getAllByText(subTitle).length ).toBe(2);
    });
});