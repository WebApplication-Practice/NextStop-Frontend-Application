import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent implements OnInit {

  userRole!: string;
  userName!: string;
  firstName!: string;
  lastName!: string;

  constructor(private router: Router) {    
    this.userName = JSON.parse(sessionStorage.getItem("userName") || '{}');
    this.userRole = JSON.parse(sessionStorage.getItem('userRole') || '{}');
    this.firstName = JSON.parse(sessionStorage.getItem('firstName') || '{}');
    this.lastName = JSON.parse(sessionStorage.getItem('lastName') || '{}');
  }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('lastName');
    this.router.navigate(['/login']);
  }

}
