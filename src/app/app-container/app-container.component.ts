import { Component, OnInit } from '@angular/core';
import { ITransaction } from '../models/transaction.models';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  transaction: ITransaction;
  transactions: ITransaction[];
  constructor() { }

  ngOnInit() {
    this.transaction = {
      user: null,
      date: null,
      account: null,
      description: null,
      group: null,
      amount: 0,
      type: null,
      tags: null
    };
  }

  submitTransaction(submitted: ITransaction) {
    console.log('submitted', submitted);
  }
}
