import { Component, OnInit, Input } from '@angular/core';
import { ITransaction } from '../models/transaction.models';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {

  transaction: ITransaction;
  transactions: ITransaction[];
  constructor(private transactionService: TransactionService) { }

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
    this.transactions = [];
  }

  submitTransaction(submitted: ITransaction) {
    this.transactionService.addTransaction(submitted);
  }
}
