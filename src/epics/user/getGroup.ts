import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, mergeMap, startWith } from 'rxjs/operators';

import { GET_GROUP_INFO_START, getGroupInfoFulfilled, toggleProgress } from '../../actions';

import { API } from '../../config/consts';
import { User } from '../../config/types';

import { checkToken, customError, Epic, errHandler } from '../';

export const getGroupEpic: Epic = (action$, state$, { sessionStorage }) =>
    action$.pipe(
        ofType(GET_GROUP_INFO_START),
        mergeMap(() => {
            const token = checkToken();
            const groupInfo = sessionStorage.getItem('group');
            if (groupInfo && !state$.value.user.firstLoad) {
                return of(
                    getGroupInfoFulfilled(JSON.parse(groupInfo)),
                );
            }
            return ajax.getJSON<{ type: string, data: User[] }>(`${API}/user/group/`, {
                Authorization: `Bearer ${token}`,
            }).pipe(
                mergeMap((res) => {
                    if (res.type === 'success') {
                        return of(
                            getGroupInfoFulfilled(res.data),
                            toggleProgress(),
                        );
                    }
                    throw customError(res);
                }),
                startWith(toggleProgress(true)),
                catchError((err) => errHandler(err)));
        }),
        catchError((err) => errHandler(err)),
    );
