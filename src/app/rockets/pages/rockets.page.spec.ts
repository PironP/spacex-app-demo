import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketsPage } from './rockets.page';

describe('RocketsPage', () => {
  let component: RocketsPage;
  let fixture: ComponentFixture<RocketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
