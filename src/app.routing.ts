import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { RegisterComponent } from "./app/register/register.component";
import { CustomerLoginComponent } from "./app/customer-login/customer-login.component";
import { EmployeeLoginComponent } from "./app/employee-login/employee-login.component";
import { EditProfileComponent } from "./app/edit-profile/edit-profile.component";
import { AuthGuardService } from "./app/TravelApp-Services/authService/auth-guard.service";
import { BookingComponent } from "./app/booking/booking.component";
import { AccomodationComponent } from "./app/accomodation/accomodation.component";
import { ViewPackagesComponent } from "./app/view-packages/view-packages.component";
import { ViewBookingsComponent } from "./app/view-bookings/view-bookings.component";
import { ViewPackageDetailsComponent } from "./app/view-package-details/view-package-details.component";
import { ViewVehicleComponent } from "./app/view-vehicle/view-vehicle.component";
import { AddVehicleComponent } from "./app/add-vehicle/add-vehicle.component";
import { BookRatingComponent } from "./app/book-rating/book-rating.component";
import { CustomercareComponent } from "./app/customercare/customercare.component";
import { RentVehicleComponent } from "./app/rent-vehicle/rent-vehicle.component";
import { ViewHotelsComponent } from "./app/view-hotels/view-hotels.component";
import { AddhotelComponent } from "./app/addhotel/addhotel.component";
import { PaymentComponent } from "./app/payment/payment.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'employee', component: EmployeeLoginComponent },
  { path: 'bookpackage/:packageId', component: BookingComponent },
  { path: 'accomodation/:bookingId', component: AccomodationComponent },
  { path: 'viewPackages', component: ViewPackagesComponent },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: 'viewBookings', component: ViewBookingsComponent, canActivate: [AuthGuardService] },
  { path: 'viewPackageDetails/:packageId/:packageName', component: ViewPackageDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'viewVehicles', component: ViewVehicleComponent, canActivate: [AuthGuardService] },
  { path: 'addVehicles', component: AddVehicleComponent, canActivate: [AuthGuardService] },
  { path: 'rentVehicle/:vehicleId/:ratePerHour/:ratePerKm/:vehicleName/:vehicleType', component: RentVehicleComponent },
  { path: 'viewHotels', component: ViewHotelsComponent, canActivate: [AuthGuardService] },
  { path: 'customerCare', component: CustomercareComponent },
  { path: 'addHotel', component: AddhotelComponent, canActivate: [AuthGuardService] },
  { path: 'payments/:bookingId/:estimatedCost', component: PaymentComponent, canActivate: [AuthGuardService] },
  { path: 'addRating/:bookingId', component: BookRatingComponent },

  { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);