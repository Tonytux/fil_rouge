import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string = "";

  login(mail:string, password: string): Observable<boolean> {
    const isLoggedIn = (mail == 'angular' && password =='angular');
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );

  }

  logout(){
    this.isLoggedIn = false;
  }
}
