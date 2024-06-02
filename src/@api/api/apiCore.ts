import axios from '../axios'

class APICore {
    get = (url: string, params: any) => {
        let response
        if (params) {
            const queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : ''
            response = axios.get(`${url}?${queryString}`, params)
        } else {
            response = axios.get(`${url}`)
        }
        return response
    }
}

export { APICore }
