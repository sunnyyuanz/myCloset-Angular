import { Component, OnInit, Input } from '@angular/core';
//import this to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
//this import brings in the API calls we created
import { FetchApiDataService } from '../fetch-api-data.service';
//this import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userLoginData = { Username: '', Password: '' };
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  //ngOnInit method is called once the component has received all its inputs (all its data-bound properties) from the calling component—in other words, the real-life user.
  ngOnInit(): void {}

  //This is the function responsible for sending the form inputs to the backend
  loginUser(): void {
    this.fetchApiData.userLogin(this.userLoginData).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('user', result.user.Username);
        localStorage.setItem('token', result.token);
        this.router.navigate(['items']);
        this.snackBar.open('successfully logged in!', 'OK', {
          duration: 3000,
        });
      },
      (result) => {
        console.log(result);
        this.snackBar.open('successfully logged in!', 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
