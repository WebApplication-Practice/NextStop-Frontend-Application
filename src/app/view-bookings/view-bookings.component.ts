import { Component, OnInit } from '@angular/core';
import { IBookings } from '../TravelApp-Interfaces/booking';
import { UserService } from '../TravelApp-Services/UserServices/user.service';
import { Router } from '@angular/router';
import { IRating } from '../TravelApp-Interfaces/rating';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  errorMsg!: string;
  emailId!: string;
  bookings: any[] = [];
  showError: boolean = false;
  status: boolean = false;
  imageSrc!: string;
book: any;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.emailId = JSON.parse(sessionStorage.getItem("userName") || '{}');
    if (this.emailId == null) {
      this.router.navigate(['/login']);
    }
    this._userService.getAllBookings(this.emailId)
      .subscribe(
        resBookingData => {
          this.bookings = resBookingData;
          if (this.bookings.length == 0) {
            this.showError = true;
            this.errorMsg = "Your Booking Details is empty.";
          }
        },
        resBookingError => {
          this.bookings = [];
          this.errorMsg = resBookingError;
          console.log(this.errorMsg);
          if (this.bookings.length == 0) {
            this.showError = true;
            this.errorMsg = "No records found.";
          }
        },
        () => console.log("GetBookings method executed successfully")
      );
    //this.imageSrc = "assets/delete-item.jpg";
  }

  addRating(booking: IRating) {
    this.router.navigate(['/addRating', booking.bookingId])
  }
  
}
