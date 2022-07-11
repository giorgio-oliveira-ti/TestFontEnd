/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndicacaoService } from './indicacao.service';

describe('Service: Indicacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndicacaoService]
    });
  });

  it('should ...', inject([IndicacaoService], (service: IndicacaoService) => {
    expect(service).toBeTruthy();
  }));
});
