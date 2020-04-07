import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import * as commonTypes from 'modules/commonTypes';

export type SitedataAction = ActionType<typeof actions>

export type SiteDataState = commonTypes.sitedataSagaResponseType;
