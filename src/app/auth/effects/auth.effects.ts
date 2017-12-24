import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';

import { tap } from 'rxjs/operators';

import * as authActions from '../actions/auth.actions';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  loginSuccess$: Observable<Action> = this.actions$
    .ofType(authActions.LOGIN_SUCCESS)
    .pipe(tap(() => this.router.navigate(['/'])));

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(authActions.LOGIN_REDIRECT, authActions.LOGOUT)
    .pipe(
      tap(() => {
        this.router.navigate(['/login']);
      })
    );

  constructor(private actions$: Actions, private router: Router) {}
}
