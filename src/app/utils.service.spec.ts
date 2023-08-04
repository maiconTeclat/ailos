import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('CpfService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return invalid when the CPF is empty', () => {
    const result = service.validateCpf('');
    expect(result.isValid).toBeFalse();
    expect(result.name).toEqual('');
  });

  it('should return invalid when the CPF has less than 11 digits', () => {
    const result = service.validateCpf('1234567890');
    expect(result.isValid).toBeFalse();
    expect(result.name).toEqual('');
  });

  it('should return invalid when the CPF has more than 11 digits', () => {
    const result = service.validateCpf('123456789012');
    expect(result.isValid).toBeFalse();
    expect(result.name).toEqual('');
  });

  it('should return invalid when the CPF contains only one repeating digit', () => {
    const result = service.validateCpf('00000000000');
    expect(result.isValid).toBeFalse();
    expect(result.name).toEqual('');
  });

  it('should return invalid when the CPF is not found', () => {
    const result = service.validateCpf('11111111111');
    expect(result.isValid).toBeFalse();
    expect(result.name).toEqual('');
  });

  it('should return a valid CPF', () => {
    const result = service.validateCpf('12345678909');
    expect(result.isValid).toBeTrue();
  });
});
