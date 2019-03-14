import { Injectable } from '@angular/core';
import { ITransaction } from '../models/transaction.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transaction$ = new Subject<ITransaction>();

  addTransaction(transaction: ITransaction) {
    this.transaction$.next(transaction);
  }
}
