import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, provideRouter, Router, RouterStateSnapshot } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';
import { authGuard, guestGuard } from './auth.guard';
import { TokenService } from './token.service';

const mockRoute = {} as ActivatedRouteSnapshot;
const mockState = { url: '/test' } as RouterStateSnapshot;

describe('authGuard', () => {
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    });
    tokenService = TestBed.inject(TokenService);
  });

  it('should return true when token exists', () => {
    tokenService.set('valid-token');
    const result = TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(result).toBe(true);
  });

  it('should return UrlTree (redirect) when no token', () => {
    tokenService.clear();
    const result = TestBed.runInInjectionContext(() => authGuard(mockRoute, mockState));
    expect(result).not.toBe(true);
  });
});

describe('guestGuard', () => {
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    });
    tokenService = TestBed.inject(TokenService);
  });

  it('should return true when no token (guest user)', () => {
    tokenService.clear();
    const result = TestBed.runInInjectionContext(() => guestGuard(mockRoute, mockState));
    expect(result).toBe(true);
  });

  it('should return UrlTree when logged in', () => {
    tokenService.set('valid-token');
    const result = TestBed.runInInjectionContext(() => guestGuard(mockRoute, mockState));
    expect(result).not.toBe(true);
  });
});
