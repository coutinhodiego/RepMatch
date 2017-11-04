import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaRepComponent } from './ajuda-rep.component';

describe('AjudaRepComponent', () => {
  let component: AjudaRepComponent;
  let fixture: ComponentFixture<AjudaRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudaRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
