import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IAccomodation } from 'src/app/TravelApp-Interfaces/accomodation';
import { IAddVehicle } from 'src/app/TravelApp-Interfaces/addVehicle';
import { IBookings } from 'src/app/TravelApp-Interfaces/booking';
import { ICustomer } from 'src/app/TravelApp-Interfaces/customer';
import { ICustomerCare } from 'src/app/TravelApp-Interfaces/customerCare';
import { IEmployee } from 'src/app/TravelApp-Interfaces/employee';
import { IHotel } from 'src/app/TravelApp-Interfaces/hotel';
import { IPayment } from 'src/app/TravelApp-Interfaces/payment';
import { IRating } from 'src/app/TravelApp-Interfaces/rating';
import { IVehicleBooked } from 'src/app/TravelApp-Interfaces/rentVehicle';
import { IViewHotel } from 'src/app/TravelApp-Interfaces/viewHotel';
import { IViewVehicle } from 'src/app/TravelApp-Interfaces/viewVehicle';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //Validate Customer Credentials
  validateCredentials(id: string, password: string): Observable<string[]>
  {
    var cusObj: ICustomer;
    cusObj = {  emailId: id, userPassword: password };
    return this.http.post<string[]>('https://localhost:7050/api/user/ValidateUserCredentials', cusObj).pipe(catchError(this.errorHandler));
  }

  //Validate Employee Credentials
  validateEmployeeCredentials(id: string, password: string): Observable<string[]>
  {
    var cusObj: IEmployee;
    cusObj = { emailId: id, password: password };
    return this.http.post<string[]>('https://localhost:7050/api/user/ValidateEmployeeCredentials', cusObj).pipe(catchError(this.errorHandler));
  }

  //Add Customer Details in Registration
  addCustomerDetails(firstName: string, lastName: string, emailId: string, userPassword: string, gender: string, contactNumber: number, dateOfBirth: Date, address: string, roleId: number): Observable<boolean> {
    var cusObj: ICustomer;
    cusObj = {
      firstName: firstName, lastName: lastName, emailId: emailId, userPassword: userPassword,
      gender: gender, contactNumber: contactNumber, dateOfBirth: dateOfBirth, address: address, roleId: 0
    };
    return this.http.post<boolean>('https://localhost:7050/api/user/InsertCustomerDetails', cusObj).pipe(catchError(this.errorHandler));
  }

  UpdateUserProfile(firstName: string, lastName: string, emailId: string, gender: string, contactNumber: number, dateOfBirth: Date, address: string): Observable<boolean> {
    var editUser = { FirstName: firstName, LastName: lastName, EmailId: emailId, Gender: gender, ContactNumber: contactNumber, DateOfBirth: dateOfBirth, Address: address };
    return this.http.put<boolean>('https://localhost:7050/api/user/UpdateCustomerProfileUsingAPI', editUser).pipe(catchError(this.errorHandler));
}

BookPackage(contactNumber: number, address: string, dateOfTravel: Date, numberOfAdults: number, numberOfChildren: number, emailId: string, packageId: number, status: string): Observable<number>
  {
      var bookObj: IBookings;
      bookObj = { bookingId: 0, contactNumber: contactNumber, address: address, dateOfTravel: dateOfTravel, numberOfAdults: numberOfAdults, numberOfChildren: numberOfChildren, status: status, emailId: emailId, packageId: packageId }
      return this.http.post<number>('https://localhost:7050/api/user/BookPackage', bookObj).pipe(catchError(this.errorHandler));
  }

  getAllBookings(emailId: string): Observable<IBookings[]>
  {
      let param = "?emailId=" + emailId;
      return this.http.get<IBookings[]>('https://localhost:7050/api/user/GetBookings' + param).pipe(catchError(this.errorHandler));
  }

  addCustomerQuery(bookingId: number, query: string, queryStatus: string, assignee: string, queryAnswer: string): Observable<boolean> {
    var cusObj: ICustomerCare;
    cusObj = { bookingId: bookingId, query: query, queryStatus: "In Progress", assignee: "ABC", queryAnswer: "Not Resolved yet" };
    return this.http.post<boolean>('https://localhost:7050/api/user/CustomerCare', cusObj).pipe(catchError(this.errorHandler));
  }

  getBookingId(emailId: string): Observable<number> {
    let param = "?emailId=" + emailId;
    return this.http.get<number>('https://localhost:7050/api/user/GetCustomerCareBookingId' + param).pipe(catchError(this.errorHandler));
  }

  getAllCities(): Observable<string[]>
  {
   return this.http.get<string[]>('https://localhost:7050/api/user/GetAllCityList').pipe(catchError(this.errorHandler));
  }

  getPackageId(city: string): Observable<number> {
    let param = "?city=" + city;
    return this.http.get<number>('https://localhost:7050/api/user/GetPackageIdByCity' + param).pipe(catchError(this.errorHandler));
  
  }

  GetHotelsByCityNameAndHotelType(cityName: string, hotelType: number): Observable<IHotel[]> {
    let param = "?cityName=" + cityName + "&hotelType=" + hotelType;
    return this.http.get<IHotel[]>('https://localhost:7050/api/user/GetHotelsByCityNameAndHotelType' + param).pipe(catchError(this.errorHandler));
  }

  GetCalculatedEstimateCost(hotelName: string, roomType: string, noOfRooms: number): Observable<number> {
    let param = "?hotelName=" + hotelName + "&roomType=" + roomType + "&numberOfRooms=" + noOfRooms;
    return this.http.get<number>('https://localhost:7050/api/user/GetCalculatedEstimateCostUsingAPI' + param).pipe(catchError(this.errorHandler));
  }

  AddAccomodation(accDetails: IAccomodation): Observable<number> {
    // var accDetails: IAccomodation;
    // accDetails = { AccomodationId: 0, BookingId: bookingId, HotelName: hotelName, City: city, NoOfRooms: noOfRooms, HotelRating: hotelRating, Price: price, RoomType: roomType }
    return this.http.post<number>('https://localhost:7050/api/user/AddAccommodationUsingAPI', accDetails).pipe(catchError(this.errorHandler));
  }

  ViewHotelDetails(): Observable<IViewHotel[]> {

    return this.http.get<IViewHotel[]>('https://localhost:7050/api/user/ViewHotelDetail').pipe(catchError(this.errorHandler));
  }

  addhotels(hotelName: string, hotelRating: number, singleRoomPrice: number, doubleRoomPrice: number, deluxeeRoomPrice: number,suiteRoomPrice: number,city: string,packageId: number): Observable<number> {
    var v: IHotel;
    v = {
      HotelId: 0,
      HotelName: hotelName,
      HotelRating: hotelRating,
      SingleRoomPrice: singleRoomPrice,
      DoubleRoomPrice: doubleRoomPrice,
      DeluxeeRoomPrice: deluxeeRoomPrice,
      SuiteRoomPrice: suiteRoomPrice,
      City: city,
      PackageId: packageId
    }
    return this.http.post<number>('https://localhost:7050/api/user/addhotels', v).pipe(catchError(this.errorHandler));
  }

  RentVehicle(rentObj: IVehicleBooked): Observable<number>
  {
      let tempVar = this.http.post<number> ('https://localhost:7050/api/user/rentvehicles', rentObj).pipe(catchError(this.errorHandler));
      return tempVar;
  }

  ViewVehicleDetails(): Observable<IViewVehicle[]> {
    let tempVar = this.http.get<IViewVehicle[]>
      ('https://localhost:7050/api/user/viewvehicle').
      pipe(catchError(this.errorHandler));
    return tempVar;
  }

  addvehicles(vehicleName: string, vehicleType: string, ratePerHour: number, ratePerKm: number, basePrice: number): Observable<number> {
    var v: IAddVehicle;
    v = {
      VehicleId: 0, VehicleType: vehicleType,
      VehicleName: vehicleName, RatePerHour: ratePerHour,
      RatePerKm: ratePerKm, BasePrice: basePrice
    }
    return this.http.post<number>('https://localhost:7050/api/user/addvehicles', v).pipe(catchError(this.errorHandler));
  }

  addRating(rating1: number, comments: string, bookingId: number) {
    var userObj: IRating;
    userObj = { rating1: rating1, comments: comments, bookingId: bookingId };
    return this.http.post<boolean>('https://localhost:7050/api/user/InsertBookingRating', userObj).pipe(catchError(this.errorHandler));
  }

  TotalPayment(bookingId: number): Observable<number> {

    return this.http.get<number>('https://localhost:7050/api/user/GetTotalPaymentUsingAPI?bookingId=' + bookingId).pipe(catchError(this.errorHandler));
  }

  PaymentStatusService(pay: IPayment): Observable<boolean> {

    return this.http.post<boolean>('https://localhost:7050/api/user/PaymentStatusUsingAPI', pay).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
