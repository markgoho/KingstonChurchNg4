import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as authActions from '../actions/auth.actions';
import * as fromAuth from '../reducers';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuth.getLoggedIn).pipe(
      map(authed => {
        if (!authed) {
          this.store.dispatch(new authActions.LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
