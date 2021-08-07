import { ProductsAPI } from "../api/api"


const initialState = {
    items: [],
    isLoaded: false,
    headerPopup: false,
}

const ipodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IPODS':
            return {
                ...state, 
                //items: action.payload,
                items: [...state.items, ...action.payload],
                isLoaded: true,

            }
        case 'SET_PRE_LOADER': 
            return {
                ...state,
                isLoaded: action.payload
            } 
        case 'SET_HEADER_POPUP':
            return{
                ...state,
                headerPopup: action.payload
            }
        default:
            return state        

    }
}

//===============================================================================================================

export const setIpods = (items) => ({type: 'SET_IPODS', payload: items})

export const setPreLoader = (isLoading) => ({type: "SET_PRE_LOADER", payload: isLoading})

export const setHeaderPopup = (setted) => ({type: "SET_HEADER_POPUP", payload: setted})

//===============================================================================================================


export const fetchIpods = (startSlice, numberOfProducts) => async (dispatch) => {
    dispatch(setPreLoader(false))
    const { data } = await ProductsAPI.getProducts(startSlice, numberOfProducts)
    dispatch(setIpods(data))
}


export default ipodsReducer;