import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, mergeMap, startWith } from 'rxjs/operators';

import { ALLOCATE_ALL_START, allocateAllFulfilled, AllocateAllFulfilled, AllocateAllStart, enqueueSnackbar } from 'Actions';
import { StoreState } from 'Reducers';

import { API } from 'Config/consts';

import { Action, CANDIDATE, checkToken, customError, Dependencies, errHandler } from 'Epics';

export const allocateAllEpic: Epic<Action, Action, StoreState, Dependencies> = (action$, state$) =>
    action$.pipe(
        ofType(ALLOCATE_ALL_START),
        mergeMap((action: AllocateAllStart) => {
            const token = checkToken();
            const { interviewType } = action;
            const { viewing } = state$.value.recruitment;
            return ajax.put(`${API}/candidate/interview/${interviewType}`, JSON.stringify({ title: viewing }), {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }).pipe(
                mergeMap(({ response: res }: AjaxResponse) => {
                    if (res.type === 'success') {
                        const allocations = res.allocations as AllocateAllFulfilled['data'];
                        const failed = allocations.filter(({ time }) => !time).length;
                        const message = failed ? `有${failed}位候选人没有分配到时间！(不包括未选择时间的)` : '所有候选人均分配了时间！(不包括未选择时间的)';
                        return of(
                            allocateAllFulfilled(allocations, interviewType),
                            enqueueSnackbar(message, { variant: failed ? 'info' : 'success' }),
                            { type: CANDIDATE.SUCCESS },
                        );
                    }
                    throw customError(res);
                }),
                startWith(
                    { type: CANDIDATE.START },
                ),
                catchError((err) => errHandler(err, CANDIDATE)),
            );
        }),
        catchError((err) => errHandler(err, CANDIDATE)),
    );
