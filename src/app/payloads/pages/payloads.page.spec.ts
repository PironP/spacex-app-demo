import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayloadsPage } from './payloads.page';

describe('PayloadsPage', () => {
  let component: PayloadsPage;
  let fixture: ComponentFixture<PayloadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayloadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
