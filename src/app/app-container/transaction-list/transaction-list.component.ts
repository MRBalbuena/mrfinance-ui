import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction.models';
import { TransactionService } from 'src/app/services/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnChanges {
  @Input() transactions: ITransaction[];

  transactionList: ITransaction[];
  newTransaction: Subscription;
  columnsToDisplay = [];
  constructor(private transactionService: TransactionService) {
    this.newTransaction = this.transactionService.getTransaction()
      .subscribe(transaction => {
        console.log('getTransaction', transaction);
        this.transactionList.push(transaction);
      });
  }

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
      }, {
        user: { 'id': 2, 'name': 'Gabriela' },
        date: new Date(),
        account: {id: 1, name: 'Barclays'},
        description: 'Asda',
        group: {id: 1, name: 'Supermarket'},
        amount: 120,
        type: {id: 1, name: 'Out'},
        tags: [{id: 1, name: 'test'}]
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.transactionList = this.transactions;
  }

}
