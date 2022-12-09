import { Component, OnInit, Input } from '@angular/core';
//import this to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
//this import brings in the API calls we created
import { FetchApiDataService } from '../fetch-api-data.service';
//this import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userLoginData = { Username: '', Password: '' };
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  //ngOnInit method is called once the component has received all its inputs (all its data-bound properties) from the calling component—in other words, the real-life user.
  ngOnInit(): void {}

  //This is the function responsible for sending the form inputs to the backend
  loginUser(): void {
    this.fetchApiData.userLogin(this.userLoginData).subscribe(
      (result) => {
        //logic for a successful user login goes here!(To be implemented)
        this.dialogRef.close(); //This will close the modal on success!
        console.log(result);
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      },
      (result) => {
        console.log(result);
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
