import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilFotosComponent } from './pefil-fotos.component';

describe('PefilFotosComponent', () => {
  let component: PefilFotosComponent;
  let fixture: ComponentFixture<PefilFotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PefilFotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PefilFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
