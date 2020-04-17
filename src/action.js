 import { CHANGE_ITEM_VALUE, RESET_ITEM_VALUE, SET_ITEMS } from './constant.js';
 
 export const setItemvalue = (text) => {
     return ({ 
        type: CHANGE_ITEM_VALUE,
        payload: text
     })
 }

 export const resetItemvalue = () => {
    return ({ 
       type: RESET_ITEM_VALUE
    })
}


export const setItems = (text) => {
    return ({ 
       type: SET_ITEMS,
       payload: text
    })
}
