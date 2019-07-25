import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsPage } from './dragons.page';

describe('DragonsPage', () => {
  let component: DragonsPage;
  let fixture: ComponentFixture<DragonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
