import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss']
})
export class SearchCustomersComponent implements OnInit {
  age: number;
  customers: Customer[];


  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
    
  }

 private searchCustomers() {
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);
  }

  onSubmit(){
    this.searchCustomers();
  }

}
