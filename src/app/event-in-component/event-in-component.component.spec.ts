import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInComponentComponent } from './event-in-component.component';

describe('EventInComponentComponent', () => {
  let component: EventInComponentComponent;
  let fixture: ComponentFixture<EventInComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventInComponentComponent]
    });
    fixture = TestBed.createComponent(EventInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
