import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerReview } from './models/customer-reviews.model';
import { MenuSection } from './models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) {}

getMenu(): Observable<MenuSection[]> {
  return this.getData('menu');
}

getCustomerReviews(): Observable<CustomerReview[]> {
  return this.getData('customer-reviews');
}

getData(fileName: string): Observable<any> {
  return this.http.get(`assets/data/${fileName}.json`);
}

}
