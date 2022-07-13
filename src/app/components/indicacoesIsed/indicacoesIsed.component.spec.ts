/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IndicacoesIsedComponent } from './indicacoesIsed.component';

describe('IndicacoesIsedComponent', () => {
  let component: IndicacoesIsedComponent;
  let fixture: ComponentFixture<IndicacoesIsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacoesIsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacoesIsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
