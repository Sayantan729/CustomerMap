import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNumberDialogComponent } from './vehicle-number-dialog.component';

describe('VehicleNumberDialogComponent', () => {
  let component: VehicleNumberDialogComponent;
  let fixture: ComponentFixture<VehicleNumberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleNumberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNumberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
