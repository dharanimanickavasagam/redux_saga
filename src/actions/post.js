import {GET_POST} from "../constants/constants"

export const posts = (payload) => { 
    return { 
        type : GET_POST,
        payload
    }
}