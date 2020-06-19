import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopcionRegistroComponent } from './adopcion-registro.component';

describe('AdopcionRegistroComponent', () => {
  let component: AdopcionRegistroComponent;
  let fixture: ComponentFixture<AdopcionRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdopcionRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopcionRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
