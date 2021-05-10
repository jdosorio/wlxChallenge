import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksSectionComponent } from './thanks-section.component';

describe('ThanksSectionComponent', () => {
  let component: ThanksSectionComponent;
  let fixture: ComponentFixture<ThanksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
