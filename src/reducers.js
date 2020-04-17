import { CHANGE_ITEM_VALUE, RESET_ITEM_VALUE, SET_ITEMS, RESET_ITEMS } from './constant.js';



const initialState = {
    item: '',
}

export const updateItemsState = (state=initialState, action) => {
    // console.log(action.type)
    if(action.type === CHANGE_ITEM_VALUE ) {
      return Object.assign( {}, state, { item: action.payload });
    } 
    if (action.type === RESET_ITEM_VALUE) {
        return { ...state, item: ''}
    }
    return state  
}


const initialStateItems = {
    items: [] 
}
export const itemsState = (state= initialStateItems, action) => {
    // console.log(action.type)
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, items: action.payload  }
        case RESET_ITEMS: 
        return { ...state, items: action.payload  };
        default:  
            return state; 
    }   
}

// export const resetItemsState = (state=initialState, action={}) => {
//     console.log(action.type)
//     if(action.type === CHANGE_ITEM_VALUE ) {
//       return state
//     } 
    
// }

// export const updateItemsState = (state=initialState, action={}) => {
//     console.log(action.type)
//     switch(action.type) {
//         case  CHANGE_ITEM_VALUE:
//             return Object.assign( {}, state, { item: action.payload });
//         default:
//             return state 
//     }
// }