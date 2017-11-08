import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRepComponent } from './banner-rep.component';

describe('BannerRepComponent', () => {
  let component: BannerRepComponent;
  let fixture: ComponentFixture<BannerRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
