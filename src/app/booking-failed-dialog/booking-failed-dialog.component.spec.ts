import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFailedDialogComponent } from './booking-failed-dialog.component';

describe('BookingFailedDialogComponent', () => {
  let component: BookingFailedDialogComponent;
  let fixture: ComponentFixture<BookingFailedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingFailedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
