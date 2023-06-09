import { Component, OnInit } from '@angular/core';
import { UserService } from '../TravelApp-Services/UserServices/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IViewHotel } from '../TravelApp-Interfaces/viewHotel';

@Component({
  selector: 'app-view-hotels',
  templateUrl: './view-hotels.component.html',
  styleUrls: ['./view-hotels.component.css']
})
export class ViewHotelsComponent implements OnInit {

  constructor(private _UserService: UserService,
    private router: Router, private route: ActivatedRoute) { }
    emailId!: string;
  showMsgDiv: boolean = false;
  errMsg!: string;
  hotelObj: IViewHotel[] = [];
  hotelId!: number;

  ngOnInit(): void {
    this.emailId = JSON.parse(sessionStorage.getItem('emailId') || '{}');

    this.ViewHotelDetails();
  }

  ViewHotelDetails() {
    this._UserService.ViewHotelDetails().subscribe(
      x => {
        this.hotelObj = x;

        console.log(this.hotelObj);
        if (this.hotelObj == null) {
          this.showMsgDiv = true;
        }
      },
      y => {
        this.errMsg = y;
        console.log(this.errMsg);
      },
      () => { console.log("ViewHotelDetails method called successfully"); }
    )
  }

}
