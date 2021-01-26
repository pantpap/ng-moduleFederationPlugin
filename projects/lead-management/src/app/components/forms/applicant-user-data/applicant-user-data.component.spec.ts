import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantUserDataComponent } from './applicant-user-data.component';

describe('ApplicantUserDataComponent', () => {
  let component: ApplicantUserDataComponent;
  let fixture: ComponentFixture<ApplicantUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantUserDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
