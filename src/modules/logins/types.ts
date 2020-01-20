import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { apiRequestInterface } from 'lib/API';

export type LoginAction = ActionType<typeof actions>;

export type LoginState = {
    login: {
        request: boolean;
        data: apiRequestInterface | null;
        error: Error | null;
    };
};








