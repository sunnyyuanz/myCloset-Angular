import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { AccountComponent } from './account/account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { MatSelectModule } from '@angular/material/select';
import { UserUpdateFormComponent } from './user-update-form/user-update-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CartViewComponent } from './cart-view/cart-view.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { ThankyouPageComponent } from './thankyou-page/thankyou-page.component';

const appRoutes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'update', component: UserUpdateFormComponent },
  { path: 'items', component: ItemCardComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'order-review', component: OrderReviewComponent },
  { path: 'thankyou', component: ThankyouPageComponent },
  { path: 'items/Women', component: ItemCardComponent },
  { path: 'items/Men', component: ItemCardComponent },
  { path: 'items/:ID', component: ItemViewComponent },
  { path: 'registration', component: UserRegistrationFormComponent },
  { path: '', redirectTo: 'items', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    ItemCardComponent,
    NavbarComponent,
    AccountComponent,
    UserProfileComponent,
    ItemViewComponent,
    UserUpdateFormComponent,
    CartViewComponent,
    OrderReviewComponent,
    ThankyouPageComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
