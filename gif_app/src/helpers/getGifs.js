export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CfRWYtGKrhYKIjHvwyhkC46H4Rnbzmlw&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await  resp.json();
    return data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}