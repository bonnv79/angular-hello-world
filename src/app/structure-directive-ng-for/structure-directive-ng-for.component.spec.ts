import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectiveNgForComponent } from './structure-directive-ng-for.component';

describe('StructureDirectiveNgForComponent', () => {
  let component: StructureDirectiveNgForComponent;
  let fixture: ComponentFixture<StructureDirectiveNgForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructureDirectiveNgForComponent]
    });
    fixture = TestBed.createComponent(StructureDirectiveNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
