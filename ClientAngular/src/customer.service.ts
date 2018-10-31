import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  // Find All
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // Create new Customer
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }
  //Find Customer by Age
  getCustomersByAge(age: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }
  //Update
  updateCustomer(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  //Delete 1 Customers
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  //Delete All
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

}
