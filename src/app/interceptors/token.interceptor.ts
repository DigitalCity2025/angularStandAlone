import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionService } from '../services/session.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionService = inject(SessionService);
  if(!sessionService.session().token) {
    return next(req);
  }
  const clone = req.clone({ setHeaders: {
    Authorization: 'Bearer ' + sessionService.session().token
  } });
  return next(clone);
};
