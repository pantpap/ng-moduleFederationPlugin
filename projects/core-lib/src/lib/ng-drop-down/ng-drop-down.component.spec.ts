import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDropDownComponent } from './ng-drop-down.component';

describe('NgDropDownComponent', () => {
  let component: NgDropDownComponent;
  let fixture: ComponentFixture<NgDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
