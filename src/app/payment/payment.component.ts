import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../TravelApp-Services/UserServices/user.service';
import { IPayment } from '../TravelApp-Interfaces/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  userRole!: string;
  userName!: string;
  msg!: string;
  bookingId!: number;
  totalCost!: number;
  responsePay!: number;
  payStatus!: string;
  estimatedCost!: number;
  payConfirmation: any;
  errorMsg!: string;

  constructor(private route: ActivatedRoute, private _UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getPaymentAmount();
    this.userName = JSON.parse(sessionStorage.getItem("userName") || '{}');
    this.userRole = JSON.parse(sessionStorage.getItem('userRole') || '{}');
    this.bookingId = parseInt(this.route.snapshot.params['bookingId']);
    this.estimatedCost = parseInt(this.route.snapshot.params['estimatedCost']);
    //this.totalCost = parseInt(this.route.snapshot.params['totalCost']);
    console.log(this.bookingId, this.estimatedCost);
  }

  submitPaymentForm(paymentForm: any) {

    this.getPaymentAmount();

    console.log(paymentForm);
    this.bookingId = parseInt(this.route.snapshot.params['bookingId']);
    //this.totalCost = this.route.snapshot.params['totalCost'];
    this.payStatus = "confirmed";

    let pay: IPayment;
    pay = { paymentId: 0, bookingId: this.bookingId, totalAmount: this.totalCost, paymentStatus: "Confirmed" }

    this._UserService.PaymentStatusService(pay).subscribe(

      resposnePayConfirmation => {
        this.payConfirmation = resposnePayConfirmation;
        if (this.payConfirmation) {
          console.log(this.totalCost)
          console.log(this.estimatedCost)
          //console.log(responsePayment)
          if (confirm("Payment Successfull")) {
            this.router.navigate(['/home']);
          }

          else {
            alert("Please Try Again");
          }

        }

      },

      responsePayErrorConfirmation => {
        this.payConfirmation = null;
        this.errorMsg = responsePayErrorConfirmation
        console.log("Unable to Complete Payment", this.errorMsg)

      },

      () => ("Payment Method Executed")

    )

  }

  getPaymentAmount() {
    //console.log(this.estimatedCost)

    this.bookingId = parseInt(this.route.snapshot.params['bookingId']);

    this._UserService.TotalPayment(this.bookingId).subscribe(

      responsePayment => {
        this.responsePay = responsePayment
        this.totalCost = this.responsePay + this.estimatedCost;
        //console.log(this.totalCost)
        //console.log(this.estimatedCost)
        //console.log(responsePayment)
        console.log("here")
      },
      responseError => {
        this.totalCost = 0;
        console.log("error recieving info")
      },
      () => ("Payment Method Executed")

    )
  }

  CancelRequest() {
    console.log("Cancel button clicked");
    alert("Accomodation Cancelled !\n Redirecting ...");
    this.router.navigate(['/packages'])
  }

}
