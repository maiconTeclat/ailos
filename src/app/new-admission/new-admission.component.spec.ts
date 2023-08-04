import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdmissionComponent } from './new-admission.component';

describe('NewAdmissionComponent', () => {
  let component: NewAdmissionComponent;
  let fixture: ComponentFixture<NewAdmissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAdmissionComponent]
    });
    fixture = TestBed.createComponent(NewAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
