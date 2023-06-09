import { Component, OnInit } from '@angular/core';
import { UserService } from '../TravelApp-Services/UserServices/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customercare',
  templateUrl: './customercare.component.html',
  styleUrls: ['./customercare.component.css']
})
export class CustomercareComponent implements OnInit {

  userName!: string;
  bookingId!: number;
  assignee!: string;
  queryAnswer!: string;
  queryStatus!: string;


  constructor(private _userService: UserService, private router: Router) {
    this.userName = JSON.parse(sessionStorage.getItem("userName") || '{}');
   }

  ngOnInit(): void {
    this.getDetails(this.userName);
  }

  getDetails(id: string) {
    this._userService.getBookingId(id).subscribe(
      resposeCustomerStatus => {
        if (resposeCustomerStatus > 0)
          this.bookingId = resposeCustomerStatus;
        console.log(this.bookingId);
      }
    );
  }
  customerCareDetails(form: NgForm) {

    this._userService.addCustomerQuery(this.bookingId, form.value.query, this.queryStatus, this.assignee, this.queryAnswer).subscribe(
      resposeCustomerCareStatus => {
        if (resposeCustomerCareStatus == true) {
          alert("Query Successfully Added...!");
          console.log(resposeCustomerCareStatus);
        }
        else {
          alert("Some error occured.Try again later! ");
        }
      }
    );
  }

}
