/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Ajax.serviceService } from './ajax.service.service';

describe('Service: Ajax.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ajax.serviceService]
    });
  });

  it('should ...', inject([Ajax.serviceService], (service: Ajax.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
