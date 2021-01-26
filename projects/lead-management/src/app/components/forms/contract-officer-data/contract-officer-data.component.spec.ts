import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractOfficerDataComponent } from './contract-officer-data.component';

describe('ContractOfficerDataComponent', () => {
  let component: ContractOfficerDataComponent;
  let fixture: ComponentFixture<ContractOfficerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractOfficerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractOfficerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
