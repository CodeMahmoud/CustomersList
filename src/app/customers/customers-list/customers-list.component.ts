import { Component, Input, OnInit } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];

  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
  filteredCustomers: any[] = [];
  customersOrderTotal!: number;
  currencyCode: string = 'USD';

  constructor(private sorterService: SorterService) {}

  ngOnInit(){

  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customersOrderTotal += customer.orderTotal;
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((customer: ICustomer) => {
        return customer.name.toLocaleLowerCase().indexOf(data.toLowerCase()) > -1 ||
               customer.city.toLocaleLowerCase().indexOf(data.toLowerCase()) > -1 ||
               customer.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }
  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop)
  }
}
