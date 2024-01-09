import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStaffComponent } from './registration-staff.component';

describe('RegistrationStaffComponent', () => {
  let component: RegistrationStaffComponent;
  let fixture: ComponentFixture<RegistrationStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationStaffComponent]
    });
    fixture = TestBed.createComponent(RegistrationStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
