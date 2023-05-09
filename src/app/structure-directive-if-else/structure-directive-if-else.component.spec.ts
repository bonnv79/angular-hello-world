import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectiveIfElseComponent } from './structure-directive-if-else.component';

describe('StructureDirectiveIfElseComponent', () => {
  let component: StructureDirectiveIfElseComponent;
  let fixture: ComponentFixture<StructureDirectiveIfElseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructureDirectiveIfElseComponent]
    });
    fixture = TestBed.createComponent(StructureDirectiveIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
