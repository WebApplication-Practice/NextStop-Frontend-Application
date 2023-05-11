import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { RegisterComponent } from "./app/register/register.component";
import { CustomerLoginComponent } from "./app/customer-login/customer-login.component";
import { EmployeeLoginComponent } from "./app/employee-login/employee-login.component";
import { EditProfileComponent } from "./app/edit-profile/edit-profile.component";
import { AuthGuardService } from "./app/TravelApp-Services/authService/auth-guard.service";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'employeelogin', component: EmployeeLoginComponent },
  // { path: 'bookpackage/:packageId', component: BookingComponent },
  // { path: 'accomodation/:bookingId', component: AccomodationComponent },
  // { path: 'viewPackages', component: ViewPackagesComponent, canActivate: [AuthGuardService] },
  // { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuardService] },
  // { path: 'viewBookings', component: ViewBookingsComponent, canActivate: [AuthGuardService] },
  // { path: 'viewPackageDetails/:packageId/:packageName', component: ViewPackageDetailsComponent, canActivate: [AuthGuardService] },
  // { path: 'viewVehicles', component: ViewVehiclesComponent, canActivate: [AuthGuardService] },
  // { path: 'addVehicles', component: AddVehicleComponent, canActivate: [AuthGuardService] },
  // { path: 'rentVehicle/:vehicleId/:ratePerHour/:ratePerKm/:vehicleName/:vehicleType', component: RentVehicleComponent },
  // { path: 'viewHotels', component: ViewHotelsComponent, canActivate: [AuthGuardService] },
  // { path: 'customerCare', component: CustomercareComponent, canActivate: [AuthGuardService] },
  // { path: 'addHotel', component: AddHotelComponent, canActivate: [AuthGuardService] },
  // { path: 'payments/:bookingId/:estimatedCost', component: PaymentsComponent, canActivate: [AuthGuardService] },
//   { path: 'addRating/:bookingId', component: BookRatingComponent},

  { path: '**', component: HomeComponent }
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);