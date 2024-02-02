export const getImagen = async() => {

    try {
        const apiKey = 'zaROSwXHym6UaM8CszCpL4s9Lfv3WDzR0';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

        const { data } = await resp.json(); 
        const { url } = data.images.original;
        // console.log(url)
        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la Imagen'
    }
}

getImagen();



