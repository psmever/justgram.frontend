import { SiteDataState } from './types';
import { ActionType } from 'modules/models';
import { createReducer } from "typesafe-actions";
import * as commonTypes from 'modules/commonTypes';

/**
 * 사이트 기본 리듀서 이니셜 데이터
 */
const initialState: SiteDataState = {
    state: 'idle',
    code_list: [],
}

/**
 * 사이트 기본 정보 리듀셔
 */
export const getSiteDataReducer = createReducer<commonTypes.sitedataSagaResponseType>(initialState, {
   [ActionType.GET_ROOTDATA_REQUEST](state: commonTypes.sitedataSagaResponseType){
       return {
           ...state,
           state: 'loading',
           code_list: []
       };
   },
   [ActionType.GET_ROOTDATA_SUCCESS](state: commonTypes.sitedataSagaResponseType,  action: commonTypes.Action<commonTypes.sitedataSagaResponseType>){
        return {
            ...state,
            state: 'success',
            code_list: action.payload.code_list,

        };
    },
    [ActionType.GET_ROOTDATA_ERROR](state: commonTypes.sitedataSagaResponseType, action: commonTypes.Action<commonTypes.sitedataSagaResponseType>) {
        return {
            ...state,
            state: 'failure'
        }
    },
});
export default getSiteDataReducer;