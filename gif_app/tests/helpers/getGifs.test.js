import {getGifs} from "../../src/helpers/getGifs.js";

describe('Tests in getGifs', ()=>{
    test('Should return list of gifs', async ()=>{
        const gifs = await  getGifs('CyberPunk');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
})