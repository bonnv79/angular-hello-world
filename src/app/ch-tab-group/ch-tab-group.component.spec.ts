import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChTabGroupComponent } from './ch-tab-group.component';

describe('ChTabGroupComponent', () => {
  let component: ChTabGroupComponent;
  let fixture: ComponentFixture<ChTabGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChTabGroupComponent]
    });
    fixture = TestBed.createComponent(ChTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
