const axios = require('axios').default
const http = axios.create({
    baseURL: 'https://random-palette-generator.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Host': 'random-palette-generator.p.rapidapi.com',
		'X-RapidAPI-Key': process.env.REACT_APP_NEXT_PUBLIC_RAPIDAPI_KEY
    }
})

async function getPalette() {
    try{
        const res = http.get('palette/Monochromatic/1/4');
        return res
    } catch(err) {
        throw new Error(err.text)
    }
}

export { getPalette }