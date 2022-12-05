// configuração inicial do axios para fazer as requisições

import axios from "axios"

export const api = axios.create({
  baseURL: "https://cloudnotes-api.onrender.com"
})