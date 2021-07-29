

    export const getGifs = async(category) => {
        const apiurl = `https://api.giphy.com/v1/gifs/search?api_key=H5O38Mdxh45OHpCmVmhbbKiqfNpnTuBV&q=${encodeURI(category)}&limit=10`;
        const resp = await fetch(apiurl);

        /*
        const {
            data:{id, title}, images:{downsized_medium:{url}}
        } = await resp.json();
        console.log(id, title, url);
        */
        const {data} = await resp.json();

        const gifs = data.map( (img) => {
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        });
        //console.log(gifs);
        //setImages(gifs);
        return gifs;
    }