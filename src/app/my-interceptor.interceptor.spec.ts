import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';

describe('MyInterceptorInterceptor', () => {
  let interceptor: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyInterceptorInterceptor],
    });

    interceptor = TestBed.inject(MyInterceptorInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept the request', () => {
    const req = {} as HttpRequest<any>;
    const next = {} as HttpHandler;
    const result = interceptor.intercept(req, next);

    // Add your expectations or assertions for the intercept behavior
  });
});
