import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRepComponent } from './buscar-rep.component';

describe('BuscarRepComponent', () => {
  let component: BuscarRepComponent;
  let fixture: ComponentFixture<BuscarRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
