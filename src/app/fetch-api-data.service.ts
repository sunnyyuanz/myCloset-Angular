import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://szmyflix.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  //Inject the HttpClient module to the constructor params
  //This will provide HttpClient to the entries class, making it available via this.http
  constructor(private http: HttpClient) {}
  //making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  public userLogin(userLoginInfo: any): Observable<any> {
    console.log(userLoginInfo);
    return this.http
      .post(apiUrl + 'login', userLoginInfo)
      .pipe(catchError(this.handleLoginError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  userGetInfo(): Observable<any> {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + `users/${user}`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  AddToWishList(product_id: any): Observable<any> {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return this.http
      .post(
        apiUrl + `users/${user}/wishlist/${product_id}`,
        {},
        {
          headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
        }
      )
      .pipe(catchError(this.handleError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  RemoveFromWishList(product_id: any): Observable<any> {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return this.http
      .delete(apiUrl + `users/${user}/wishlist/${product_id}`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      .pipe(catchError(this.handleError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  RemoveUser(): Observable<any> {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return this.http
      .delete(apiUrl + `users/${user}`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
      })
      .pipe(catchError(this.handleError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  EditUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    return this.http
      .put(
        apiUrl + `users/${user}`,
        { Username: userDetails.Username, Password: userDetails.Password },
        {
          headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
        }
      )
      .pipe(map(this.extractResponseData), catchError(this.handleError)); // pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function.
  }

  private extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  private handleLoginError(error: HttpErrorResponse): any {
    alert('Username or password is not correct');
    return throwError('username or password is not correct');
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}` + `Error body is: ${error.error}`
      );
      return throwError('Something bad happened; please try again later.');
    }
  }
}
