import { TestBed } from '@angular/core/testing';

import { CargarimagenService } from './cargarimagen.service';

describe('CargarimagenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargarimagenService = TestBed.get(CargarimagenService);
    expect(service).toBeTruthy();
  });
});
