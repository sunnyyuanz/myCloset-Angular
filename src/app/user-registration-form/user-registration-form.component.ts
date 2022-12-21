import { Component, OnInit, Input } from '@angular/core';
//this import brings in the API calls we created
import { FetchApiDataService } from '../fetch-api-data.service';
//this import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', ConfirmPassword: '' };
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {}

  //This is the function responsible for sending the form inputs to the backend
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        //logic for a successful user registration goes here!(To be implemented)
        console.log(result);
        this.snackBar.open('Account is successfully registered!', 'OK', {
          duration: 3000,
        });
        this.router.navigate(['account']);
      },
      (result) => {
        console.log(result);
        this.snackBar.open('Account is successfully registered!', 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
