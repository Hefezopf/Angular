import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Contract } from '../api/contract';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  // Spec
  it('Should return Contract', () => {
    const service: DataService = TestBed.get(DataService);
    const item = service.getData();

    expect(item instanceof Contract).toBe(true, 'instance of Contract');
    expect(item.type).toBe('X');

  });
});
