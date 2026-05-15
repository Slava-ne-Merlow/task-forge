import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });

  afterEach(() => localStorage.clear());

  it('should return null when no token stored', () => {
    expect(service.get()).toBeNull();
  });

  it('should store and retrieve a token', () => {
    service.set('my-jwt-token');
    expect(service.get()).toBe('my-jwt-token');
  });

  it('exists() should return false when no token', () => {
    expect(service.exists()).toBe(false);
  });

  it('exists() should return true after set()', () => {
    service.set('token-abc');
    expect(service.exists()).toBe(true);
  });

  it('clear() should remove the token', () => {
    service.set('token-xyz');
    service.clear();
    expect(service.get()).toBeNull();
    expect(service.exists()).toBe(false);
  });
});
