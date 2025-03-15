import BaseService from './baseService'

async function fetchData(param:any): Promise < Response > {
    try {
        const response: Response = await BaseService(param)
        return response
    } catch(err) {
        console.log("err", err)
        throw err;
    }
}

export default fetchData