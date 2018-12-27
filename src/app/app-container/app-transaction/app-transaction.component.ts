import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './app-transaction.component.html',
  styleUrls: ['./app-transaction.component.scss']
})
export class AppTransactionComponent {

  transactionForm = this.fb.group({
    date: null,
    description: null,
    amount: 0,
    group: null
  });
  constructor(private fb: FormBuilder) {}

  groups = [
    {id: 1, name: 'Supermarket'},
    {id: 2, name: 'Car Maintenance'},
    {id: 3, name: 'Insurance'}
  ];

}
