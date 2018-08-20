import { MAKE_SERIVE_CALL_FULFILLED,MAKE_SERIVE_CALL_PENDING, MAKE_SERIVE_CALL_REJECTED } from '../../Utils/types';
//define initial state
const initialState = {
    data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}
export default function(state = initialState, action){
    switch(action.type){
        case MAKE_SERIVE_CALL_PENDING:
        return{
            ...state,
            data: [],
            isFetching: true
        }
        case MAKE_SERIVE_CALL_FULFILLED:
        return{
            ...state,
            isFetching: false,
            data: action.payload
        }
        case MAKE_SERIVE_CALL_REJECTED:
        return{
            ...state,
        isFetching: false,
        error: true
        }
        default:
        return state;
    }
}