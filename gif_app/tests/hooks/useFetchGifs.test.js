import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in hook useFetchGifs', () => {
    test('should return to the initial state', () => {
        const { result } = renderHook( () => useFetchGifs('Blade Runner') );
        const { images, isLoading } = result.current;
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('should return an array of images and isLoading set to false', async() => {
        const { result } = renderHook( () => useFetchGifs('Blade Runner') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});