import { SiteDataState } from './types';
import { ActionType } from 'modules/models';
import { createReducer } from "typesafe-actions";
import { Action, sitedataSagaResponseType } from 'modules/types';

/**
 * 사이트 기본 리듀서 이니셜 데이터
 */
const initialState: SiteDataState = {
    state: 'yet'
}

/**
 * 사이트 기본 정보 리듀셔
 */
export const getSiteDataReducer = createReducer<sitedataSagaResponseType>(initialState, {
   [ActionType.GET_ROOTDATA_REQUEST](state: sitedataSagaResponseType){
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