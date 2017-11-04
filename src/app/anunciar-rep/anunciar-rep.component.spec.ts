import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciarRepComponent } from './anunciar-rep.component';

describe('AnunciarRepComponent', () => {
  let component: AnunciarRepComponent;
  let fixture: ComponentFixture<AnunciarRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciarRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciarRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
