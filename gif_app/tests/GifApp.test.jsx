import { render } from '@testing-library/react';
import { GifApp } from '../src/GifApp';

describe('Tests in GifExpertApp', () => {
    test('should', () => {
        const { container } = render( <GifApp /> );
        expect(container).toMatchSnapshot();
    });
});