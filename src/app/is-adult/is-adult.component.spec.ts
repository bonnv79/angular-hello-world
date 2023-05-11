import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsAdultComponent } from './is-adult.component';

describe('IsAdultComponent', () => {
  let component: IsAdultComponent;
  let fixture: ComponentFixture<IsAdultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsAdultComponent]
    });
    fixture = TestBed.createComponent(IsAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
