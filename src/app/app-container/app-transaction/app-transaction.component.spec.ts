import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTransactionComponent } from './app-transaction.component';

describe('AppTransactionComponent', () => {
  let component: AppTransactionComponent;
  let fixture: ComponentFixture<AppTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
