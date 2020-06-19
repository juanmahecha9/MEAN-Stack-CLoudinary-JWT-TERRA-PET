import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilvistaComponent } from './pefilvista.component';

describe('PefilvistaComponent', () => {
  let component: PefilvistaComponent;
  let fixture: ComponentFixture<PefilvistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PefilvistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PefilvistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
