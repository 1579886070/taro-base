/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "../http"

export const getList = (data) => {
  return HTTPREQUEST.get('/home', data)
}

export const getInfo = (data) => {
    return HTTPREQUEST.get("/info", data)
}