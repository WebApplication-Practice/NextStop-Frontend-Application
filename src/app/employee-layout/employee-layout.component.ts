import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent implements OnInit {
  status!: string[];
  userRole: string | undefined;
  userName!: string;
  firstName!: string;
  lastName!: string;

  constructor(private router: Router) { 
    this.userRole = JSON.parse(sessionStorage.getItem('userRole') || '{}');
    this.userName = JSON.parse(sessionStorage.getItem("userName") || '{}');
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
