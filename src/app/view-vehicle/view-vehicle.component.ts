import { Component, OnInit } from '@angular/core';
import { UserService } from '../TravelApp-Services/UserServices/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IViewVehicle } from '../TravelApp-Interfaces/viewVehicle';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent implements OnInit {

  constructor(private _UserService: UserService,
    private router: Router, private route: ActivatedRoute) { }
  emailId!: string;
  showMsgDiv: boolean = false;
  errMsg!: string;

  vehicleObj: IViewVehicle[] = [];

  ngOnInit(): void {
    this.emailId = JSON.parse(sessionStorage.getItem('emailId') || '{}' );
    this.ViewVehicleDetails();

  }
  ViewVehicleDetails() {
    this._UserService.ViewVehicleDetails().subscribe(
      x => {
        this.vehicleObj = x;
        console.log(this.vehicleObj.length);
        console.log(this.vehicleObj);
        if (this.vehicleObj == null) {
          this.showMsgDiv = true;
        }
        //console.log(this.showMsgDiv);
      },
      y => {
        this.errMsg = y;
        console.log(this.errMsg);
      },
      () => { console.log("ViewVehicleDetails method called successfully"); }
    )
  }

  RentVehicle(vehicle: IViewVehicle) {
    this.router.navigate(['/rentVehicle',
      vehicle.vehicleId, vehicle.ratePerHour, vehicle.ratePerKm,
      vehicle.vehicleName, vehicle.vehicleType]);
  }
}

