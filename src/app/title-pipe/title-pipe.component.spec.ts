import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePipeComponent } from './title-pipe.component';

describe('TitlePipeComponent', () => {
  let component: TitlePipeComponent;
  let fixture: ComponentFixture<TitlePipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlePipeComponent]
    });
    fixture = TestBed.createComponent(TitlePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
