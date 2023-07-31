import {render, screen } from "@testing-library/react";
import {GifItem} from "../../src/components/index.js";

describe('Tests in GifItem', ()=>{
    const title = 'CyberPunk';
    const url = 'https://cyberpunk.com/cyberpunk.jpg'
    test('Snapshot match', ()=>{
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should show img with url and alt', ()=>{
        render(<GifItem title={title} url={url}/>);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('Should show the title of the component', ()=>{
        render(<GifItem title={title} url={url}/>);
        expect( screen.getByText(title)).toBeTruthy();
    });
})