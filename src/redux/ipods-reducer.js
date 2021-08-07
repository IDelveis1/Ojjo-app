import { ContentAPI, ProductsAPI } from "../api/api"


const initialState = {
    items: [],
    isLoaded: false,
    headerPopup: false,
    readMore: null,
    isLoadedReadMore: false,
}

const ipodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IPODS':
            return {
                ...state, 
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
        case 'SET_READ_MORE':
            return{
                ...state,
                readMore: action.payload,
                isLoadedReadMore: true,
            }    
        default:
            return state        

    }
}

//===============================================================================================================

export const setIpods = (items) => ({type: 'SET_IPODS', payload: items})

export const setPreLoader = (isLoading) => ({type: "SET_PRE_LOADER", payload: isLoading})

export const setHeaderPopup = (setted) => ({type: "SET_HEADER_POPUP", payload: setted})

export const setReadMore = (text) => ({type: "SET_READ_MORE", payload: text})

//===============================================================================================================


export const fetchIpods = (startSlice, numberOfProducts) => async (dispatch) => {
    dispatch(setPreLoader(false))
    const { data } = await ProductsAPI.getProducts(startSlice, numberOfProducts)
    dispatch(setIpods(data))
}


export const fetchReadMore = () => async (dispatch) => {
    dispatch(setPreLoader(false))
    const { data } = await ContentAPI.getText()
    dispatch(setReadMore(data.text))
}



export default ipodsReducer;