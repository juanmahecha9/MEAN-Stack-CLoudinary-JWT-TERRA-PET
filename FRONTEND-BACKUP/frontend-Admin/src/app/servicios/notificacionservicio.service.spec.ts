import { TestBed } from '@angular/core/testing';

import { NotificacionservicioService } from './notificacionservicio.service';

describe('NotificacionservicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificacionservicioService = TestBed.get(NotificacionservicioService);
    expect(service).toBeTruthy();
  });
});
