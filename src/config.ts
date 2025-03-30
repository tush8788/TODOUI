type configTypes = {
    ApiUrl:string,
    googleClientId:string
}

export const config:configTypes = {
    ApiUrl: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/',
    googleClientId:import.meta.env.VITE_Google_CLIENT_ID
}