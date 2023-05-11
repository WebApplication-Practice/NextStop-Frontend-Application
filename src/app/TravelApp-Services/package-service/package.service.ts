import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ICategory } from 'src/app/TravelApp-Interfaces/category';
import { IPackage } from 'src/app/TravelApp-Interfaces/package';
import { IPackageDetails } from 'src/app/TravelApp-Interfaces/packageDetails';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  packages!: IPackage[];
  categories!: ICategory[];

  constructor(private http: HttpClient) { }

  getAllPackages(): Observable<IPackage[]> {
    let temp = this.http.get<IPackage[]>
      ('https://localhost:7050/api/user/GetPackages').pipe(catchError(this.errorHandler))
    return temp;
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>
      ('https://localhost:7050/api/user/GetPackageCategories').pipe(catchError(this.errorHandler));
  }
  getPackageDetailsByPackId(packageId: number): Observable<IPackageDetails[]> {
    return this.http.get<IPackageDetails[]>('https://localhost:7050/api/user/GetAllPackageDetailsByCategories?packageId=' + packageId).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
