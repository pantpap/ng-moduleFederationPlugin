import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationDataComponent } from './recommendation-data.component';

describe('RecommendationDataComponent', () => {
  let component: RecommendationDataComponent;
  let fixture: ComponentFixture<RecommendationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
