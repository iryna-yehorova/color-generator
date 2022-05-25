const axios = require('axios').default
const http = axios.create({
    baseURL: 'https://www.thecolorapi.com/',
})

async function getPalette(color) {
    try{
        console.log(color)
        const res = await http.get('/scheme', {
            params: {
                hex: color,
                mode: 'analogic',
                count: 5
            }
        })
        return res.data.colors.map(color => color.hex.value)
    } catch(err) {
        throw new Error(err.text)
    }
} 

export { getPalette }