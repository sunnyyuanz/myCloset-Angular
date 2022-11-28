import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators'

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://szmyflix.herokuapp.com/'
@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
//Inject the HttpClient module to the constructor params
//This will provide HttpClient to the entries class, making it available via this.http
  constructor(private http:HttpClient) {}
//making the api call for the user registration endpoint
public userRegistration(userDetails:any):Observable<any>{
  console.log(userDetails);
  return this.http.post(apiUrl+'users',userDetails).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public userLogin(userLoginInfo:any):Observable<any>{
  console.log(userLoginInfo);
  return this.http.post(apiUrl+'login',userLoginInfo).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public userGetInfo(userGetInfo:any):Observable<any>{
  console.log(userGetInfo);
  let user = localStorage.getItem('user')
  return this.http.get(apiUrl+`users/${user}`,userGetInfo).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public GetWishList(wishList:any):Observable<any>{
  console.log(wishList);
  let user = localStorage.getItem('user')
  return this.http.get(apiUrl+`users/${user}/collections`,wishList).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public AddToWishList(product_id:any,wishList:any):Observable<any>{
  console.log(product_id,wishList);
  let user = localStorage.getItem('user')
  return this.http.post(apiUrl+`users/${user}/collections/${product_id}`,wishList).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public RemoveFromWishList(product_id:any,wishList:any):Observable<any>{
  console.log(product_id,wishList);
  let user = localStorage.getItem('user')
  return this.http.delete(apiUrl+`users/${user}/collections/${product_id}`,wishList).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public RemoveUser(userDetails:any):Observable<any>{
  console.log(userDetails);
  return this.http.delete(apiUrl+`users/${userDetails.username}`,userDetails).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

public EditUser(userDetails:any):Observable<any>{
  console.log(userDetails);
  return this.http.put(apiUrl+`users/${userDetails.username}`,userDetails).pipe(catchError(this.handleError))// pipe() fucntion is from RxJS, a reactive programming library for Javascript, is used to combine multiple functions into a single function. 
}

private handleError(error:HttpErrorResponse):any{
  if(error.error instanceof ErrorEvent){
    console.error('Some error occurred:', error.error.message);
  }else{
    console.error(
      `Error Status code ${error.status}`+
      `Error body is: ${error.error}`
    )
    return throwError(
      'Something bad happened; please try again later.'
    )
  }
}
}

    