import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlLabelComponent } from './control-label.component';

describe('ControlLabelComponent', () => {
  let component: ControlLabelComponent;
  let fixture: ComponentFixture<ControlLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlLabelComponent]
    });
    fixture = TestBed.createComponent(ControlLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
