import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import { GROUPS, USERS, ACCOUNTS, TYPES } from 'src/app/shared/constants';

@Component({
  selector: 'app-transaction',
  templateUrl: './app-transaction.component.html',
  styleUrls: ['./app-transaction.component.scss']
})
export class AppTransactionComponent {

  transactionForm = this.fb.group({
    user: null,
    date: null,
    account: null,
    description: null,
    group: null,
    amount: 0,
    type: null,
    tags: null
  });
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = ['Party'];
  allTags: string[] = ['Christmas 2019', 'holidays 2019', 'Valencia', 'Home Valencia', 'Party'];
  groups = GROUPS;
  users = USERS;
  accounts = ACCOUNTS;
  types = TYPES;
  @ViewChild('tags') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private fb: FormBuilder) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }


  add(event: MatChipInputEvent): void {
    // Add tags only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.tagCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const tagValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().indexOf(tagValue) === 0);
  }

  onSubmit(event: any) {
    console.log(JSON.stringify(this.transactionForm.value));
  }
}
