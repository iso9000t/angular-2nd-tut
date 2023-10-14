import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: "root",
})
export class HousingService {
  constructor(private http: HttpClient) {}

  readonly baseUrl = "http://localhost:3000/locations";

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.baseUrl);
  }

  getHousingLocationById(id: number): Observable<HousingLocation> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<HousingLocation>(url);
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
