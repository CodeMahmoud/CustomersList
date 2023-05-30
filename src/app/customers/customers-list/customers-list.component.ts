import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  filteredCustomer: any[] = [];
  customersOrderTotal!: number;
  currenyCode: string = 'USD';

  constructor() {}

  ngOnInit(){


  }
}
