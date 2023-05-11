import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChTabPanelComponent } from './ch-tab-panel.component';

describe('ChTabPanelComponent', () => {
  let component: ChTabPanelComponent;
  let fixture: ComponentFixture<ChTabPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChTabPanelComponent]
    });
    fixture = TestBed.createComponent(ChTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
