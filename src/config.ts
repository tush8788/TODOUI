type configTypes = {
    ApiUrl:string,
    googleClientId:string
}

export const config:configTypes = {
    //@ts-ignore
    ApiUrl: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/',
    //@ts-ignore
    googleClientId:import.meta.env.VITE_Google_CLIENT_ID
}