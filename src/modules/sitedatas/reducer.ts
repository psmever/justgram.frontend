import { SiteDataState } from './types';
import { ActionType } from 'modules/models';
import { createReducer } from "typesafe-actions";
import { Action, sitedataSagaResponseType } from 'modules/types';

const initialState: SiteDataState = {
    state: 'yet'
}

export const getSiteDataReducer = createReducer<sitedataSagaResponseType>(initialState, {
   [ActionType.GET_ROOTDATA_LOADING](state: sitedataSagaResponseType){
       return {
           ...state,
           state: 'yet'
       };
   },
   [ActionType.GET_ROOTDATA_SUCCESS](state: sitedataSagaResponseType,  action: Action<sitedataSagaResponseType>){
        return {
            ...state,
            state: 'success',
            code: action.payload.code_list,

        };
    },
    [ActionType.GET_ROOTDATA_ERROR](state: sitedataSagaResponseType, action: Action<sitedataSagaResponseType>) {
        return {
            ...state,
            state: 'failure'
        }
    },
});
export default getSiteDataReducer;