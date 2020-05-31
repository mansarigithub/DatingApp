/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Alertify.service.tsService } from './alertify.service.ts.service';

describe('Service: Alertify.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Alertify.service.tsService]
    });
  });

  it('should ...', inject([Alertify.service.tsService], (service: Alertify.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
