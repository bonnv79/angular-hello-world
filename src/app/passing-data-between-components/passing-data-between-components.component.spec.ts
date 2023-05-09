import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingDataBetweenComponentsComponent } from './passing-data-between-components.component';

describe('PassingDataBetweenComponentsComponent', () => {
  let component: PassingDataBetweenComponentsComponent;
  let fixture: ComponentFixture<PassingDataBetweenComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassingDataBetweenComponentsComponent]
    });
    fixture = TestBed.createComponent(PassingDataBetweenComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
