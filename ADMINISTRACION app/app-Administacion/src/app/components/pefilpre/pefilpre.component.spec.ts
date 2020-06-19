import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilpreComponent } from './pefilpre.component';

describe('PefilpreComponent', () => {
  let component: PefilpreComponent;
  let fixture: ComponentFixture<PefilpreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PefilpreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PefilpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
