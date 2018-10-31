import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  msgs: Message [] = [];
  submitted = false;

  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  newCustomer(): void{
    this.submitted = false;
    this.customer = new Customer()

  }
  save(){
    this.customerService.createCustomer(this.customer)
      .subscribe(data => console.log(data), 
      error => console.log(error));
      this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

 

}
