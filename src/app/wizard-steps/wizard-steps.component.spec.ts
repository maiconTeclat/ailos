import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepsComponent } from './wizard-steps.component';

describe('WizardStepsComponent', () => {
  let component: WizardStepsComponent;
  let fixture: ComponentFixture<WizardStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WizardStepsComponent]
    });
    fixture = TestBed.createComponent(WizardStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
