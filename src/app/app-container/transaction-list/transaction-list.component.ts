import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction.models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnChanges {
  @Input() transactions: ITransaction[];

  transactionList: ITransaction[];
  columnsToDisplay = [];
  constructor() { }

  ngOnInit() {
    this.transactionList = [];
    this.columnsToDisplay = ['user', 'group'];
    this.transactionList = [
      {
        user: { 'id': 1, 'name': 'Marcelo' },
        date: new Date(),
        account: {id: 1, name: 'Barclays'},
        description: 'Asda',
        group: {id: 1, name: 'Supermarket'},
        amount: 120,
        type: {id: 1, name: 'Out'},
        tags: [{id: 1, name: 'test'}]
      }];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.transactionList = this.transactions;
  }

}
