import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in GifGrid', () => {
    const category = 'Resident Evil';
    test('should initially display the loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });

    test('should display items when loading images useFetchGifs', () => {
        const gifs = [
            {
                id: '1',
                title: 'Resident Evil',
                url: 'https://localhost/jill.jpg'
            },
            {
                id: '2',
                title: 'Dragon Ball',
                url: 'https://localhost/trunks.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);
    });
});