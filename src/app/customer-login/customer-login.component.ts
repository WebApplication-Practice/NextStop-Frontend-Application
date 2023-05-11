import { Component, OnInit } from '@angular/core';
import { UserService } from '../TravelApp-Services/UserServices/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  status!: string[];
  errorMsg!: string;
  msg!: string;
  showDiv: boolean = false;
  name!: string;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submitLoginForm(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);
    this._userService.validateCredentials(form.value.email, form.value.password).subscribe(
      responseLoginStatus => {
        //console.log("Inside response");
        this.status = responseLoginStatus;
        console.log(this.status);
        this.showDiv = true;
        if (this.status != null) {
          sessionStorage.setItem('userName', form.value.email);
          sessionStorage.setItem('userRole', this.status[0]);
          sessionStorage.setItem('firstName', this.status[1]);
          sessionStorage.setItem('lastName', this.status[2]);
          this.router.navigate(['/home']);
        }
        else {

          alert(this.msg = "Try again with valid credentials");
        }

      },
      responseLoginError => {
        //console.log("here error");
        this.errorMsg = responseLoginError;
        console.log(this.errorMsg);
      },
      () => console.log("SubmitLoginForm method executed successfully")
    );



  }
}
