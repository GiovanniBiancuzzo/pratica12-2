import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../models/sign-up';
import { Login } from '../models/login';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://localhost:4201';
  private authSubject = new BehaviorSubject<null | Login>(null);
  user$ = this.authSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login (data: {email: Login, password:string}) {
    return this.http.post<Login>(`${this.URL}/login`, data).pipe(tap((data: any)=>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data));
    }),
    catchError(this.errorType));
  }

  signUp(data:SignUp) {
    return this.http.post<SignUp>(`${this.URL}/register`, data).pipe(catchError(this.errorType));
  }

  logout() {
    this.router.navigate(['/'])

  }

  errorType(err:any) {
    switch (err.error) {
      case "Email and password are required":
        return throwError("Email e password sono obbligatorie");
        break;
      case "Email already exists":
        return throwError("Utente gia registrato");
        break;
      case "Email format is invalid":
        return throwError("Email scritta male");
        break;
      case "Cannot find user":
        return throwError("Utente non esiste");
        break;
      default:
        return throwError("Errore nella chiamata");
        break;
    }
  }
}
