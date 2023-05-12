import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { routing } from 'src/app.routing';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { PaymentComponent } from './payment/payment.component';
import { RentVehicleComponent } from './rent-vehicle/rent-vehicle.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';
import { ViewPackageDetailsComponent } from './view-package-details/view-package-details.component';
import { ViewPackagesComponent } from './view-packages/view-packages.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CommonLayoutComponent,
    CustomerLayoutComponent,
    CustomerLoginComponent,
    EmployeeLayoutComponent,
    EmployeeLoginComponent,
    HomeComponent,
    EditProfileComponent,
    AccomodationComponent,
    AddVehicleComponent,
    AddhotelComponent,
    BookRatingComponent,
    BookingComponent,
    CustomerLogoutComponent,
    CustomercareComponent,
    PaymentComponent,
    RentVehicleComponent,
    ViewBookingsComponent,
    ViewHotelsComponent,
    ViewPackageDetailsComponent,
    ViewPackagesComponent,
    ViewVehicleComponent
  ],
  imports: [
    BrowserModule,
  FormsModule, HttpClientModule, ReactiveFormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
